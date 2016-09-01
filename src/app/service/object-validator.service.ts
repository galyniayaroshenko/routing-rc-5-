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
    let res = {};
    let resD = {};
    let options = {};

    let attr = {status: 'OK'};

    let con = {
      status: {
        presence: true,
        exclusion: {
          within: ['OK', 'ERROR:general', 'ERROR:target']
        },
        inclusion: {
          within: ['smile', 'OK']
        },
        length: {
          min: 3,
          max: 10,
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
        length: {
          min: 5,
          max: 15,
        }
      }

    };

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
    if(this.isDefined(con.status.length)) {
      message = this.length(attr.status, con.status.length.min, con.status.length.max);
      result.push(message);
    }
    return result;
    
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
      message = {message: `${value} fine`};
      return message;
    }
      message = {message: `${value} is not included in the list`};
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
      message = {message: `${value} fine`};
      return message;
    }
      message = {message: `${value} is restricted`};
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
    if (this.isDefined(value)) {
      return true;
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
    return typeof obj == "object" && typeof obj !== null && obj != undefined;
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
  private extend(obj) {
    [].slice.call(arguments, 1).forEach(function(source) {
      for (var attr in source) {
        obj[attr] = source[attr];
      }
    });
    return obj;
  };

  private length(value, min, max) {
    let message;
    let minimum = min;
    let maximum = max;
    
    if (this.isEmpty(value)) {
      return;
    }
    
    var length = value.length;
    if(!this.isNumber(length)) {
      return message = {message: 'has an incorrect length'}
    }

    if(this.isNumber(minimum) && length < minimum) {
      return message = {message: `is too short (minimum is ${minimum} characters)`}
    }

    if(this.isNumber(maximum) && length > maximum) {
      return message = {message: `is too long (maximum is ${maximum} characters)`}
    }
      return message = {message: `is cool length ${length}`}
  }



  
  // private isEmpty(obj) {
  //   if (obj == null) return true;
  //   if (obj.length > 0) return false;
  //   if (obj.length === 0) return true;

  //   if (typeof obj !== "object") return true;

  //   for (var key in obj) {
  //       if (Object.prototype.hasOwnProperty.call(obj, key)) return false;
  //   }
  //   return true;
  // }

  // private copyObject(obj) {
  //   var copy = {};
  //   for (var key in obj) {
  //     copy[key] = obj[key];
  //   }
  //   return copy;
  // };

  // private deepCopy(obj) {
  //   if (typeof obj != "object") {
  //       return obj;
  //   }
  //   var copy = obj.constructor();
  //   for (var key in obj) {
  //       if (typeof obj[key] == "object") {
  //           copy[key] = this.deepCopy(obj[key]);
  //       } else {
  //           copy[key] = obj[key];
  //       }
  //   }
  //   return copy;
  // };
}



