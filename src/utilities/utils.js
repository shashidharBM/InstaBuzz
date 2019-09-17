import CompanyLogo from '../assets/images/companyLogo.png';

const getCompanyLogo = () => {
    return CompanyLogo;
}

const isEmptyObject = obj => {
    if (obj) {
        return (Object.keys(obj).length <= 0
        && (Object.prototype.toString.call(obj) === Object.prototype.toString.call({})));
    }
    return null;
}

const isNullOrEmptyOrUndefined = (value) => {
    return value === '' || value === null || value === undefined || isEmptyObject(value);
}

const isNotEmptyArray = (obj) => {
    return obj && Array.isArray(obj) && obj.length > 0;
  }

export {
    isNullOrEmptyOrUndefined,
    getCompanyLogo,
    isEmptyObject,
    isNotEmptyArray
}