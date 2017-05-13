/**
 * @api {POST} http://localhost/asc/backend/web/api/shopping-item/create shopping-item/create
 * @apiName POST/shopping-item/create
 * @apiGroup shopping-list
 * @apiDescription Create item
- category: either id or name of the category (automaticly will be created)
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "Nesto trece"
* @apiParam {text} category "1"
* @apiParam {text} details "400 g"
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
 * @api {POST} http://localhost/asc/backend/web/api/shopping-item/finish-shopping shopping-item/finish-shopping
 * @apiName POST/shopping-item/finish-shopping
 * @apiGroup shopping-list
 * @apiDescription Finish shopping
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/json

 * 
 * @apiParam {text} items[0][id] "1"
* @apiParam {text} items[0][name] "test item promjena"
* @apiParam {text} items[0][details] "detalji"
* @apiParam {text} items[0][isChecked] "true"
* @apiParam {text} items[0][isBought] "false"
* @apiParam {text} items[0][category][id] "2"
* @apiParam {text} items[0][category][name] "Hrana"
* @apiParam {text} items[1][id] "3"
* @apiParam {text} items[1][name] "test new item"
* @apiParam {text} items[1][details] ""
* @apiParam {text} items[1][isChecked] "true"
* @apiParam {text} items[1][isBought] "true"
* @apiParam {text} items[1][category][id] "1"
* @apiParam {text} items[1][category][name] "test category"
* @apiParam {text} items[2][id] "4"
* @apiParam {text} items[2][name] "test trelksdj"
* @apiParam {text} items[2][details] ""
* @apiParam {text} items[2][isChecked] "true"
* @apiParam {text} items[2][isBought] "true"
* @apiParam {text} items[2][category][id] "1"
* @apiParam {text} items[2][category][name] "test category"
* @apiParam {text} items[3][id] "5"
* @apiParam {text} items[3][name] "Salama"
* @apiParam {text} items[3][details] "Piko parizer"
* @apiParam {text} items[3][isChecked] "false"
* @apiParam {text} items[3][isBought] "false"
* @apiParam {text} items[3][category][id] "1"
* @apiParam {text} items[3][category][name] "test category"
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
 * @api {POST} http://localhost/asc/backend/web/api/shopping-item/uncheck?id=7 shopping-item/uncheck
 * @apiName POST/shopping-item/uncheck
 * @apiGroup shopping-list
 * @apiDescription Uncheck item in shopping list
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "Nesto trece"
* @apiParam {text} category "1"
* @apiParam {text} details "400 g"
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
 * @api {GET} http://localhost/asc/backend/web/api/shopping-category shopping-category
 * @apiName GET/shopping-category
 * @apiGroup shopping-list
 * @apiDescription List of shopping categories
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "Nesto trece"
* @apiParam {text} category "1"
* @apiParam {text} details "400 g"
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
 * @api {GET} http://localhost/asc/backend/web/api/shopping-item shopping-item
 * @apiName GET/shopping-item
 * @apiGroup shopping-list
 * @apiDescription Get list of shopping items
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "test item"
* @apiParam {text} category "test category"
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
 * @api {PUT} http://localhost/asc/backend/web/api/shopping-item/update?id=6 shopping-item/update
 * @apiName PUT/shopping-item/update
 * @apiGroup shopping-list
 * @apiDescription Update item
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "Salama"
* @apiParam {text} category "1"
* @apiParam {text} details "500 g"
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
 * @api {POST} http://localhost/asc/backend/web/api/shopping-item/check?id=7 shopping-item/check
 * @apiName POST/shopping-item/check
 * @apiGroup shopping-list
 * @apiDescription Check item in shopping list
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "Nesto trece"
* @apiParam {text} category "1"
* @apiParam {text} details "400 g"
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