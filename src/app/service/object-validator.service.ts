import { Injectable } from '@angular/core';

@Injectable()
export class ObjectValidatorService {
  public constraints: Object;
  public attributes: Object;

  private exclusion(value, values)  {
    if (values.indexOf(value) !== -1) {
      return `${value} is not valid. It is on the exceptions [ ${values} ]`;
    }    
  }

  private extendObj(obj, src) {
    for (var key in src) {
      let value = src[key];
      if(value.constructor === 'Object') {
        obj[key] = this.extendObj({}, value);
      } else {
        obj[key] = value;
      }  
    }
    return obj;
  }

  private fieldValidate(name, value, constraints) {
    let typeCheckResult;
    
    if (!this.isDefined(value)) {
      if (constraints.required) {
        return `Field ${name} is required`;
      }
      return;  
    }

    console.log(value);
    
    typeCheckResult = this.typeCheck(value, constraints.type);
    if (typeCheckResult) {
      return typeCheckResult;
    }

    switch (constraints.type) {
      case Number:
        if (constraints.exclusion) {
          let exclusionCheckResult = this.exclusion(value, constraints.exclusion);

          if (exclusionCheckResult) {
            return exclusionCheckResult;
          }
        }

        if (constraints.inclusion) {
          let inclusionCheckResult = this.inclusion(value, constraints.inclusion);

          if (inclusionCheckResult) {
            return inclusionCheckResult;
          }
        }

        if (constraints.range) {
          let rangeCheckResult = this.rangeCheck(value, constraints.range);

          if (rangeCheckResult) {
            return rangeCheckResult;
          }
        }              
        break;
      case String:
        if (constraints.exclusion) {
          let exclusionCheckResult = this.exclusion(value, constraints.exclusion);

          if (exclusionCheckResult) {
            return exclusionCheckResult;
          }
        }

        if (constraints.inclusion) {
          let inclusionCheckResult = this.inclusion(value, constraints.inclusion);

          if (inclusionCheckResult) {
            return inclusionCheckResult;
          }
        }      
        break;
      case Array:
        if (constraints.arrayValueType) {
          for (let key in value) {
            let typeCheckResult = this.typeCheck(value[key], constraints.arrayValueType);
            
            if (typeCheckResult) {
              return `arrayValueType ${typeCheckResult} and is equal ${value[key]}`;
            }
          }
        }
        break;         
      case Boolean:
      case Object:
        break;
      default:
        throw new Error(`Unknown data type: ${new constraints.type().constructor.name}`);  
    }         
  }

  private inclusion(value, values) {
    if (values.indexOf(value) === -1) {
      return `${value} is not included in the list [ ${values} ]`;
    }
  }

  private isDefined(value) {
    return (value != null && value !== '');
  }

  private rangeCheck(value, options) {
    let minimum = options[0];
    let maximum = options[1];
    
    if (value < minimum) {
      return `${value} is too small, must be greater than or equal to ${minimum}`
    }
    if (value > maximum) {
      return `${value} is too large, Must be less than or equal to ${maximum}`
    }
  }

  private typeCheck(value, options) {
    if (value.constructor !== options) {
      return `Expected ${new options().constructor.name}, but ${value.constructor.name} found`;
    }  
  }

  validate(attributes, constraints) {
    let errors = [];
    let unexpectedFields = [];

    attributes = this.extendObj({}, attributes);
    
    for (let attr in constraints) {
      let fieldValidationResult = this.fieldValidate(attr, attributes[attr], constraints[attr]);

      if (fieldValidationResult) {
        errors.push(fieldValidationResult);
      }
      delete attributes[attr];      
    }

    unexpectedFields = Object.keys(attributes);

    if (unexpectedFields.length) {
      errors.push(`Unexpected fields: ${unexpectedFields.join(', ')}`);
    }



    if (errors.length) {
      return '- ' + errors.join('\n- ');
    }    
  }
}