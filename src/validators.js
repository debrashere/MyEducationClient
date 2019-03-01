
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
    
    let urlToCheck = value;
    if (!/^https?:\/\//i.test(urlToCheck)) {
        urlToCheck = 'http://' + urlToCheck;
    }

    try {
         new URL(urlToCheck);
    }
    catch (error) {
        return 'This is not a valid URL format'; 
    }
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
    return undefined;
}

export const matches = field => (value, allValues) =>
    field in allValues && value.trim() === allValues[field].trim()
        ? undefined
        : 'Does not match';


