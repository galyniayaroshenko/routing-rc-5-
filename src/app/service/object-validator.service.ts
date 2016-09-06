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

    let attr = {
      status: 44,
      data: 'cds'
    };

    let con = {
      status: {
        required: true,
        exclusion: ['OK', 'ERROR:general', 'ERROR:target', 'asd', 34, true],
        inclusion: ['smile', 'OK'],
        type: 4,
        arrayValueType: '',
        range: [1, 10]
      },
      data: {
        required: true,
        exclusion: ['OK'],
        inclusion: ['smile', 'OK'],
        range: [1, 50],
        type: [],
        arrayValueType: ''
      }
    }

    for (let key in con) {

      if (!this.isEmpty(attr[key])) {

        if(con[key].required === true) {
          message = this.presence(attr[key]);
          result.push(message);
        }

        if(this.isArray(attr[key]) || this.isObject(attr[key])) {

          if(this.isDefined(con[key].type)) {
            message = this.type(attr[key].constructor, con[key].type);
            result.push(message);

            if(this.isDefined(con[key].arrayValueType)) {

              for (let key2 in attr[key]) {
                message = this.arrayValueType(attr[key][key2], con[key].arrayValueType);
                result.push(message);
              }
            } 
              // else {
              //   throw new Error(`Unexpected response body`);
              // }

          }
        } else {

          if(this.isDefined(con[key].type)) {
            message = this.type(attr[key].constructor, con[key].type);
            result.push(message);
          }

          if(this.isNumber(attr[key]) || this.isString(attr[key])) {
            if(this.isDefined(con[key].exclusion)) {
              message = this.exclusion(attr[key], con[key].exclusion);
              result.push(message);
            }
            if(this.isDefined(con[key].inclusion)) {
              message = this.inclusion(attr[key], con[key].inclusion);
              result.push(message);
            }
          } 
          // else {
          //   throw new Error(`Unexpected response body`);
          // }

          if(this.isNumber(attr[key])) {
            if(this.isDefined(con[key].range)) {
              message = this.range(attr[key], con[key].range);
              result.push(message);
            }
          } 
          // else {
          //   throw new Error(`Unexpected response body`);
          // } 

        }
      }
    }
    return result;
  }

  public range(value, options) {
    let message;
    let minimum = options[0];
    let maximum = options[1];
    let length = value;

    if (this.isEmpty(value)) { 
      return;
    }
    if(this.isNumber(minimum) && length < minimum) {
      return message = {message: `is too short (minimum is ${minimum} characters)`}
    }
    
    if(this.isNumber(maximum) && length > maximum) {
      return message = {message: `is too long (maximum is ${maximum} characters)`}
    }

    return message = {message: `is cool length ${length}`}
  }
  public arrayValueType(value, options) {
    let message;
      switch (options.constructor) {
        case String:
        // for (let i = 0; i < value.length; i++) {
          if (this.isString(value))
            return message = { message: `${value} is String` };
            message = { message: `${value} is not String` };
        // }
        break;
        case Number:
        // for (let i = 0; i < value.length; i++) {
          if (this.isNumber(value))
            return message = { message: `${value} is Number` };
            message = { message: `${value} is not Number` };
        // }
        break;
        case Object:
        // for (let i = 0; i < value.length; i++) {
          if (this.isObject(value))
            return message = { message: `${value} is Object` };
            message = { message: `${value} is not Object` };
        // } 
        break;
        case Array:
        // for (let i = 0; i < value.length; i++) {
          if (this.isArray(value))
            return message = { message: `${value} is Array` };
            message = { message: `${value} is not Array` };
        // } 
        break;
        case Boolean:
        // for (let i = 0; i < value.length; i++) {
          if (this.isBoolean(value))
            return message = { message: `${value} is Boolean` };
            message = { message: `${value} is not Boolean` };
        // } 
        break;
        default:
          throw new Error(`Unexpected response body: ${value}`);
      }
    return message;
  }
  public type(value, options) {
    let message;
    // if (this.isEmpty(value)) {
    //   return;
    // }
    switch (options.constructor) {
      case Array:
        if(value === Array)
          return message = { message: `${value} is Array` };
          message = { message: `${value} is not Array` };
      break;
       case Object: 
        if (value === Object)
          return message = { message: `${value} is Object` };
          message = { message: `${value} is not Object` };
      break;
      case String:
        if (value === String)
          return message = { message: `${value} is String` };
          message = { message: `${value} is not String` };
      break;
      case Number:
        if (value === Number)
          return message = { message: `${value} is Number` };
          message = { message: `${value} is not Number` };
      break;
      case Boolean:
        if (value === Boolean)
          return message = { message: `${value} is Boolean` };
          message = { message: `${value} is not Boolean` };
      break;
      default:
        throw new Error(`Unexpected response body: ${value}`);    
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
    if (this.contains(options.within, value))
      return message = {message: `${value} is included in the list`};
      return message = {message: `${value} is not included in the list!!`};
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
    if(!this.contains(options.within, value))
      return message = {message: `${value} may contain!`};
      return message = {message: `is restricted`};
  }

  public presence(value) {
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



