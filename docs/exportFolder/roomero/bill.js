/**
 * @api {GET} http://localhost/asc/backend/web/api/bill bill
 * @apiName GET/bill
 * @apiGroup bill
 * @apiDescription List of bills
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} amount "200"
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
 * {"items":[{"id":8,"description":"12345","date":"2017-05-02T22:00:00+00:00","amount":123,"payer":{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},"participants":[],"category":{"id":1,"name":"Hrana"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},"currency":{"id":"1","name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},{"id":9,"description":"Opis","date":"2017-05-02T22:00:00+00:00","amount":200,"payer":{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},"participants":[],"category":{"id":1,"name":"Hrana"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},"currency":{"id":"1","name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},{"id":10,"description":"Opis","date":"2017-05-02T22:00:00+00:00","amount":300,"payer":{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},"participants":[],"category":{"id":1,"name":"Hrana"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},"currency":{"id":"1","name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},{"id":11,"description":"opis","date":"2017-05-10T22:00:00+00:00","amount":200,"payer":{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},"participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"category":{"id":2,"name":"Cuga"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},"currency":{"id":"1","name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}],"_pagination":{"totalItems":"4","totalPages":1,"currentPage":1}}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {PUT} http://localhost/asc/backend/web/api/bill/update?id=10 bill/update
 * @apiName PUT/bill/update
 * @apiGroup bill
 * @apiDescription Create new bill
Participants: array od ids
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} category "1"
* @apiParam {text} amount "300"
* @apiParam {text} description "Opis"
* @apiParam {text} date "2017-05-02T22:00:00.000Z"
* @apiParam {text} payer "1"
* @apiParam {text} participants ""
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
 * {"id":10,"description":"Opis","date":"2017-05-02T22:00:00+00:00","amount":300,"payer":{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},"participants":[],"category":{"id":1,"name":"Hrana"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},"currency":{"id":"1","name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/bill/create bill/create
 * @apiName POST/bill/create
 * @apiGroup bill
 * @apiDescription Create new bill
Participants: array od ids
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} category "1"
* @apiParam {text} amount "200"
* @apiParam {text} description "Opis"
* @apiParam {text} date "2017-05-02T22:00:00.000Z"
* @apiParam {text} payer "1"
* @apiParam {text} participants ""
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
 * {"id":12,"description":"Opis","date":"2017-05-02T22:00:00+00:00","amount":200,"payer":{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},"participants":[],"category":{"id":1,"name":"Hrana"},"group":{"id":1,"name":"PersonalGroup","members":[{"id":1,"username":"vilim.stubican","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"},{"id":2,"username":"vilim.stubican.gmail","avatar":"https://www.gravatar.com/avatar/4278fd4c1c4a0e333aaa7282eab08344"}],"currency":{"id":1,"name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}},"currency":{"id":"1","name":"Hrvatska kuna","code":"HRK","shortcode":"kn"}}
 *
 *
 *//**
 * @api {GET} http://localhost/asc/backend/web/api/bill-category bill-category
 * @apiName GET/bill-category
 * @apiGroup bill
 * @apiDescription List of bill categories
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} amount "200"
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
 * [{"id":1,"name":"Hrana"},{"id":2,"name":"Cuga"}]
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 */