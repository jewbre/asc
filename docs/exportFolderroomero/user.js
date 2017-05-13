/**
 * @api {POST} http://localhost/asc/backend/web/api/user/facebook-login user/facebook-login
 * @apiName POST/user/facebook-login
 * @apiGroup user
 * @apiDescription Login facebook.
Returning access token is used for further api calls
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} accessToken "EAACZCfR2pd2MBALGwtGfYFULPtx8WyC0gaZBu7ZCd6OSmqiZCBKk1hXZCfK94LCiTrFAOGYZBpHcGf0gqiV1PNn2UzeowgfKbXPZBnQ3SKuxF4Ofimerepz6pyfyA6xZAm1VinSHpB358E9iZCPVYdZCnrDycPEcVayO2XS2SwcyWlPiXdwykPZAU0a"
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/user/google-login user/google-login
 * @apiName POST/user/google-login
 * @apiGroup user
 * @apiDescription Login google.
Returning access token is used for further api calls
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} accessToken "eyJhbGciOiJSUzI1NiIsImtpZCI6ImY5N2VkZmM2MDY3ZTViN2M4YzU0ZjJkMmQwY2RiMGI0NmIzNTRkNTIifQ.eyJhenAiOiI4Nzk5NDczMjA2MjAtcHJ2Y3VodHJoYjJyZDRmdTNhMnQ4cWYxY2tnYTZkMjguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJhdWQiOiI4Nzk5NDczMjA2MjAtcHJ2Y3VodHJoYjJyZDRmdTNhMnQ4cWYxY2tnYTZkMjguYXBwcy5nb29nbGV1c2VyY29udGVudC5jb20iLCJzdWIiOiIxMDIyNTU1MjU3MTExODI5NDc4NzEiLCJlbWFpbCI6InZpbGltLnN0dWJpY2FuQGdtYWlsLmNvbSIsImVtYWlsX3ZlcmlmaWVkIjp0cnVlLCJhdF9oYXNoIjoieUZqVnczck1ZN1ZpTkpaRzNZSUVsZyIsImlzcyI6ImFjY291bnRzLmdvb2dsZS5jb20iLCJpYXQiOjE0OTQ2NjgzNTYsImV4cCI6MTQ5NDY3MTk1NiwibmFtZSI6IlZpbGltIFN0dWJpxI1hbiIsInBpY3R1cmUiOiJodHRwczovL2xoNi5nb29nbGV1c2VyY29udGVudC5jb20vLXFlTVh0aUFFSFVRL0FBQUFBQUFBQUFJL0FBQUFBQUFBQUFBL0FIYWxHaHFIUXNTY3ZjZWtJSzRSZXlQWEZCQ2tUelQ3Z3cvczk2LWMvcGhvdG8uanBnIiwiZ2l2ZW5fbmFtZSI6IlZpbGltIiwiZmFtaWx5X25hbWUiOiJTdHViacSNYW4iLCJsb2NhbGUiOiJlbiJ9.m3HZyvTMvZKFxSwlNnsjDHpN6KiyXXsKrGKTnHMDEX2r4iTDphcmxnwTZTtFyalrZK-kzDRle6noI07pjzP1UHscpfCGswNzj5Nx3ONOmlhZHig2a8lClO5XlmNge72YrI5piNwOVphpY4VK1lH_8kknQhsJq4ivvlSwN4ePOWyxQokMqbOYusfR0vtyi5Oh6PD4EdbNhxy0bLn3vb5ecFi9bdAEmun9v3KA9XQyrpdTeo4XUd0vTnXwa9njE86MQfkK1xcLLTxJRfdwBgIVsXNF6hGqfySzvX_hybxi7dRNH6Ta-_PGSr2-qORoIO6SoACyMkJt2e0NSfcNMqas6g"
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {GET} http://localhost/asc/backend/web/api/user/me user/me
 * @apiName GET/user/me
 * @apiGroup user
 * @apiDescription Data for current user
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} id "1"
 *
 * @apiSuccess {Bool} success true
 * @apiSuccess {Number} code Response code
 * @apiSuccess {Array} error Empty array
 * @apiSuccess {Object} data object
 *
 * @apiError (xxx) {Bool} success false
 * @apiError (xxx) {Number} code Response code
 * @apiError (xxx) {Array} error key value array of errors
 * @apiError (xxx) {Object} data empty object
 *
 * @apiError (404) {NotFound} 404 Not found.
 * @apiError (405) {MethodNotAllowed} 405 When accessing method that's not allowed
 *
 * @apiSuccessExample {json} Success Response Example
 * {}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 */