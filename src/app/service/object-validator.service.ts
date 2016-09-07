import { Injectable } from '@angular/core';

@Injectable()
export class ObjectValidatorService {
  public constraints: Object;
  public attributes: Object;
  
  validate(attributes, constraints) {
    let errors = [];

    attributes = this.extendObj({}, attributes);
    
    for (let val in attributes) {
      if(constraints[val] === undefined) {
        throw new Error(`Unexpected response body: ${val}`);
      }
    }

    for (let attr in constraints) {
      let fieldValidationResult = this.fieldValidate(attr, attributes[attr], constraints[attr]);

      if (fieldValidationResult) {
        errors.push(fieldValidationResult);
      }
      delete attributes[attr];      
    }
    if (errors.length) {
      return errors.join('\n\n');
    }    
  }

  private fieldValidate(name, value, constraints) {
    let fieldValidationArray = [];
    if (this.isEmpty(value)) {
      if (constraints.required)
        return `Field ${name} is required`;
    }
    if (constraints.type) {
      fieldValidationArray.push(this.typeCheck(value, constraints.type));

     if ((this.isArray(value) || this.isObject(value)) && constraints.valueSubType) {
        for (let key in value) {
          fieldValidationArray.push(this.typeCheck(value[key], constraints.valueSubType));
        }
      }
    } 
    
    if (this.isNumber(value) || this.isString(value)) {
      if (constraints.exclusion) {
        fieldValidationArray.push(this.exclusion(value, constraints.exclusion));
      }
      if (constraints.inclusion) {
        fieldValidationArray.push(this.inclusion(value, constraints.inclusion));
      }
    }

    if (this.isNumber(value)) {
      if(constraints.range) {
        fieldValidationArray.push(this.range(value, constraints.range));
      }
    }

    if (fieldValidationArray.length) {
      return fieldValidationArray.join('\n');
    }
  }  

  public range(value, options) {
    let minimum = options[0];
    let maximum = options[1];
    let length = value;
    if(this.isNumber(minimum) && length < minimum) {
      return `The small number(minimum number is ${minimum})`
    }
    if(this.isNumber(maximum) && length > maximum) {
      return `The large number (maximum number is ${maximum})`
    }
  }

  public typeCheck(value, options) {
    if (value.constructor !== options)
      return `Expected ${new options().constructor.name}, but ${value.constructor.name} found`;  
  }

  public inclusion(value, options) {
    options = this.extendArray(options);
    if (!this.contains(options, value))
      return `${value} is not included in the list`;
  }

  public exclusion(value, options)  {
    options = this.extendArray(options);
    if(this.contains(options, value))
      return `Is restricted`;
  }
  private contains(obj, value) {
    if(!this.isDefined(obj)) {
      return false;
    }
    if(this.isArray(obj))
      return obj.indexOf(value) !== -1;
    return value in obj;
  }
  private isEmpty(value) {
    let attr;
    if (!this.isDefined(value)) {
      return false;
    }
    if (this.isFunction(value)) {
      return false;
    }
    if (this.isString(value)) {
      return false;
    }
    if (this.isArray(value)) {
      return value.length === 0;
    }
    if (this.isDate(value)) {
      return false;
    }
    if(this.isBoolean(value)) {
      return false;
    }
    if (this.isObject(value)) {
      for (attr in value) {
        return false;
      }
      return true;
    }
    return false;
  }
  private isArray(value) {
    return {}.toString.call(value) === '[object Array]';
  }
  private isDefined(obj) {
    return typeof obj !== null && obj !== undefined;
  }
  private isFunction (value) {
    return typeof value === 'function';
  }
  private isString(value) {
    return typeof value === 'string';
  }
  private isDate(obj) {
    return obj instanceof Date;
  }
  private isObject(obj) {
    return obj === Object(obj);
  }
  private isNumber(value) {
    return typeof value === 'number' && !isNaN(value);
  }
  private isBoolean(value) {
    return typeof value === 'boolean';
  }
  private extendArray(obj) {
    [].slice.call(arguments, 1).forEach(function(source) {
      for (var attr in source) {
        obj[attr] = source[attr];
      }
    });
    return obj;
  }
  private extendObj(obj, src) {
    for (var key in src) {
      if (src.hasOwnProperty(key)) obj[key] = src[key];
    }
    return obj;
  }
}