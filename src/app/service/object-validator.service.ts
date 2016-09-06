import { Injectable } from '@angular/core';

@Injectable()
export class ObjectValidatorService {
  public constraints: Object;
  public attributes: Object;
  
  validate(attributes, constraints) {
    let errors = [];

    attributes = Object.assign({}, attributes);

    for (let attr in constraints) {
      let fieldValidationResult = this.fieldValidate(attr, attributes[attr], constraints[attr]);

      if (fieldValidationResult) {
        errors.push(fieldValidationResult);
      }
      
      delete attributes[attr];      
    }

    if (errors.length) {
      return errors.join('\n');
    }    
  }

  private fieldValidate(name, value, constraints) {
    if (this.isEmpty(value)) {
      if (constraints.required) {
        return `Field ${name} is required`;
      }
      return;
    }
    if (constraints.type) {
      return this.typeCheck(value, constraints.type);
    }
    if (constraints.type && constraints.arrayValueType) {
      return this.typeCheck(value, constraints.arrayValueType);
    }

    // if (this.isNumber(value) || this.isString(value)) {
    //   if (constraints.exclusion) {
    //     return this.exclusion(value, constraints.exclusion);
    //   }
    //   // if (constraints.inclusion) {
    //   //   return this.inclusion(value, constraints.exclusion);
    //   // }
    // } 
    // else {
    //   return `Expected Number or string! ${value.constructor.name} can not have inclusion or exclusion`;
    // }

    // if (this.isNumber(value)) {
    //   if(constraints.range) {
    //     return this.range(value, constraints.range);
    //   }
    // } else {
    //   return `Expected Number, but ${value.constructor.name} found`;
    // }
  }  

  public range(value, options) {
    let minimum = options[0];
    let maximum = options[1];
    let length = value;
    if(this.isNumber(minimum) && length < minimum) {
      return `is too short (minimum is ${minimum} characters)`
    }
    if(this.isNumber(maximum) && length > maximum) {
      return `is too long (maximum is ${maximum} characters)`
    }
    return `is cool length ${length}`
  }

  public typeCheck(value, options) {
    if (value.constructor === options) {
      return `${value.constructor.name} expected`;
    }
    return `Expected ${new options().constructor.name}, but ${value.constructor.name} found`;     
  }

  public inclusion(value, options) {
    options = this.extend(options);
    if (this.contains(options, value))
      return `${value} is included in the list`;
      return `${value} is not included in the list`;
  }

  public exclusion(value, options)  {
    options = this.extend(options);
    if(!this.contains(options, value))
      return `${value} may contain!`;
      return `is restricted`;
  }

  public required(value) {
    let message;
    if (this.isEmpty(value))
      return message = {message: `field must be filled!!!`};
      return message = {message: `supper`};
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
  private extend(obj) {
    [].slice.call(arguments, 1).forEach(function(source) {
      for (var attr in source) {
        obj[attr] = source[attr];
      }
    });
    return obj;
  }
}