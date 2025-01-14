export const GETCSRFToken = () => {
    const csrfCookie = document.cookie.match(/csrftoken=([\w-]+)/);
    const csrftoken = csrfCookie;
    return csrftoken[1];
};