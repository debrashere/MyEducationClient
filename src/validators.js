export const required = ( value ) => {   
    return value !== undefined ?  undefined : 'Required';
};
export const nonEmpty = ( value ) => { 
    let trimmed = !value ? '' : value.trim();
    return trimmed !== '' ?  undefined :  'Cannot be empty';
};
export const isTrimmed =  ( value ) =>
    value.trim() === value ? undefined : 'Cannot start or end with whitespace';

export const length = length =>  ( value ) => {
    if (length.min && value.length < length.min) {
        return `Must be at least ${length.min} characters long`;
    }
    if (length.max && value.length > length.max) {
        return `Must be at most ${length.max} characters long`;
    }
};
export const isRatingValid =  ( value ) => {
    if (!(value > 0 && value <= 5)) {
        return `Must be a number between 1 and 5`;
    }
};
export const isNumeric =  ( value ) => {
    if (isNaN(value) === true) {
        return `Must be numeric`;
    }
};  
export const isUrlFormatValid = ( value ) => {
    let regexp =  /^(?:(?:https?|ftp):\/\/)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:\/\S*)?$/;
          if (!regexp.test(value)) {
            return 'This is not a valid URL format'; }
  };
    
export const validateField = (title, value, validations) => { 
    if (validations && validations.length > 0) {
        let result = [];
        for (let index = 0; index < validations.length; index++) {
            let validated = validations[index](value);   
            if (validated !== undefined)  {
                result.push( `${title} ${validated}`);   
                break;
            }                    
        }
        return result;
    }
}

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';


