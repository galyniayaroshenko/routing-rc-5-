import { Injectable } from '@angular/core';

@Injectable()
export class ObjectValidatorService {
  public constraints: Object;
  public attributes: Object;

  constructor () { }
  
  validate(attributes, constraints) {
    // this.attributes = attributes;
    // this.constraints = constraints;
    let result = [];
    let message = {};

    let attr = {status: 
                  { 
                    asd: {asd: 'cds'}
                  }
              };

    let con = {
      status: {
        presence: true,
        exclusion: {
          within: ['OK', 'ERROR:general', 'ERROR:target']
        },
        inclusion: {
          within: ['smile', 'OK', 'asd']
        },
        type: {
          within: ['Object']
        },
        deeplyType: {
          exclusion: {
            within: ['qwerty']
          },
          inclusion: {
            within: ['bad', 'asd']
          },
          type: {
            within: ['Object']
          }
        }

      },
      date: {
        presence: false,
        exclusion: {
          within: ['asd', 'qwerty']
        },
        inclusion: {
          within: ['bad']
        },
        type: {
          within: ['Array', 'Object']
        }
      }

    };

    if (
      this.isArray(attr.status) || 
      this.isObject(attr.status) || 
      this.isBoolean(attr.status) ||
      this.isString(attr.status) || 
      this.isNumber(attr.status))
      {
      if(this.isDefined(con.status.type)) {
        message = this.type(attr.status, con.status.type.within);
        result.push(message);
      }
    } 

    // else {
    //   throw new Error(`Unexpected response body: ${attr.status}`); 
    // }

    if(this.isObject(attr.status) && this.isDefined(con.status.deeplyType)) {
      if(this.isDefined(con.status.deeplyType.exclusion)) {
        message = this.exclusion(attr.status.asd, con.status.deeplyType.exclusion.within);
        result.push(message);
      }
      if(this.isDefined(con.status.deeplyType.inclusion)) {
        message = this.inclusion(attr.status.asd, con.status.deeplyType.inclusion.within);
        result.push(message);
      }
      if(this.isDefined(con.status.deeplyType.type)) {   
        message = this.type(attr.status.asd, con.status.deeplyType.type.within);
        result.push(message);
      }
    }



    if(con.status.presence == true) {
      message = this.presence(attr.status);
      result.push(message);
    }
    if(this.isDefined(con.status.exclusion)) {
      message = this.exclusion(attr.status, con.status.exclusion.within);
      result.push(message);
    }
    if(this.isDefined(con.status.inclusion)) {
      message = this.inclusion(attr.status, con.status.inclusion.within);
      result.push(message);
    }

    if(con.status.presence == true) {
       message = typeof attr.status;
      result.push(message);
    }
    return result;
    
  }
  public type(value, options) {
    let message;
    // if (this.isEmpty(value)) {
    //   return;
    // }
    for (let i = 0; i < options.length; i++) {
      
      switch (options[i]) {
        case 'Array': 
          if (this.isArray(value)){
            message = { message: `${value} is Array` };
          } else {
            message = { message: `${value} is not Array` };
          }
          break;
        case 'Object':
          if (this.isObject(value)){
            message = { message: `${value} is Object` };
          } else {
            message = { message: `${value} is not Object` };
          }
          break;
        case 'Boolean':
          if (this.isBoolean(value)){
            message = { message: `${value} is Boolean` };
          } else {
            message = { message: `${value} is not Boolean` };
          }
          break;
        case 'String':
          if (this.isString(value)){
            message = { message: `${value} is String` };
          } else {
            message = { message: `${value} is not String` };
          }
          break;
        case 'Number':
          if (this.isNumber(value)){
            message = { message: `${value} is Number` };
          } else {
            message = { message: `${value} is not Number` };
          }
          break;
        default:
          throw new Error(`Unexpected response body: ${value}`);    
      }
    }
    return message;
  }

  public inclusion(value, options) {
    let message;
    if (this.isEmpty(value)) {
      return;
    }
    if (this.isArray(options)) {
      options = {within: options};
    }
    options = this.extend(options);
    if (this.contains(options.within, value)) {
      message = {message: `${value} is included in the list`};
      return message;
    }
      message = {message: `${value} is not included in the list!!`};
      return message;
  }

  public exclusion(value, options)  {
    let message;
    if(this.isEmpty(value)) {
      return;
    }
    if(this.isArray(options)) {
      options = { within: options };
    }
    options = this.extend(options);
    if(!this.contains(options.within, value)) {
      message = {message: `${value} may contain`};
      return message;
    }
      message = {message: `is restricted`};
      return message;
  }

  public presence(value) {
    let message;
      if (this.isEmpty(value)) {
        message = {message: `field must be filled!!!`};
        return message;
      }
        message = {message: `supper`};
        return message;
  }

  private contains(obj, value) {
    if(!this.isDefined(obj)) {
      return false;
    }
    if(this.isArray(obj)) {
      return obj.indexOf(value) !== -1;
    }
    return value in obj;
  }

  private isEmpty(value) {
    let attr;
    // if (this.isDefined(value)) {
    //   return true;
    // }
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
    return typeof obj !== null && obj != undefined;
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
  };
}



