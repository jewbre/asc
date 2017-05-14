/**
 * @api {GET} http://localhost/asc/backend/web/api/event/repeatable?from=2017-05-01T00%3A00%3A00%2B00%3A00&to=2017-06-01T00%3A00%3A00%2B00%3A00 event/repeatable
 * @apiName GET/event/repeatable
 * @apiGroup events
 * @apiDescription repeatable events
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "test ime"
* @apiParam {text} description "test description"
* @apiParam {text} date "2017-05-02T22:00:00+00:00"
* @apiParam {text} participants[] "2"
* @apiParam {text} isRepeatable "daily"
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
 * [{"id":2,"name":"test ime","description":"test description novi","datetime":"2017-05-14T12:30:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"}]},{"id":37,"name":"test ime","description":"test description","datetime":"2017-05-21T12:30:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":40,"name":"test ime","description":"test description","datetime":"2017-05-01T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":41,"name":"test ime","description":"test description","datetime":"2017-05-02T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":42,"name":"test ime","description":"test description","datetime":"2017-05-03T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":43,"name":"test ime","description":"test description","datetime":"2017-05-04T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":44,"name":"test ime","description":"test description","datetime":"2017-05-05T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":45,"name":"test ime","description":"test description","datetime":"2017-05-06T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":46,"name":"test ime","description":"test description","datetime":"2017-05-07T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":47,"name":"test ime","description":"test description","datetime":"2017-05-08T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":48,"name":"test ime","description":"test description","datetime":"2017-05-09T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":49,"name":"test ime","description":"test description","datetime":"2017-05-10T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":50,"name":"test ime","description":"test description","datetime":"2017-05-11T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":51,"name":"test ime","description":"test description","datetime":"2017-05-12T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":52,"name":"test ime","description":"test description","datetime":"2017-05-13T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":53,"name":"test ime","description":"test description","datetime":"2017-05-14T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":54,"name":"test ime","description":"test description","datetime":"2017-05-15T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":55,"name":"test ime","description":"test description","datetime":"2017-05-16T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":56,"name":"test ime","description":"test description","datetime":"2017-05-17T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":57,"name":"test ime","description":"test description","datetime":"2017-05-18T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":58,"name":"test ime","description":"test description","datetime":"2017-05-19T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":59,"name":"test ime","description":"test description","datetime":"2017-05-20T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":60,"name":"test ime","description":"test description","datetime":"2017-05-21T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":61,"name":"test ime","description":"test description","datetime":"2017-05-22T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":62,"name":"test ime","description":"test description","datetime":"2017-05-23T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":63,"name":"test ime","description":"test description","datetime":"2017-05-24T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":64,"name":"test ime","description":"test description","datetime":"2017-05-25T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":65,"name":"test ime","description":"test description","datetime":"2017-05-26T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":66,"name":"test ime","description":"test description","datetime":"2017-05-27T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":67,"name":"test ime","description":"test description","datetime":"2017-05-28T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":68,"name":"test ime","description":"test description","datetime":"2017-05-29T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":69,"name":"test ime","description":"test description","datetime":"2017-05-30T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]},{"id":70,"name":"test ime","description":"test description","datetime":"2017-05-31T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]}]
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {PUT} http://localhost/asc/backend/web/api/event/update?id=2 event/update
 * @apiName PUT/event/update
 * @apiGroup events
 * @apiDescription update event
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "test ime"
* @apiParam {text} description "test description novi"
* @apiParam {text} date "2017-05-03T22:00:00+00:00"
* @apiParam {text} participants[] "2"
* @apiParam {text} isRepeatable "daily"
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
 * {"id":2,"name":"test ime","description":"test description novi","datetime":"2017-05-14T12:30:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"}]}
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {GET} http://localhost/asc/backend/web/api/event?from=2017-05-01T00%3A00%3A00%2B00%3A00&to=2017-06-01T00%3A00%3A00%2B00%3A00 event
 * @apiName GET/event
 * @apiGroup events
 * @apiDescription unscheduled events
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "test ime"
* @apiParam {text} description "test description"
* @apiParam {text} date "2017-05-02T22:00:00+00:00"
* @apiParam {text} participants[] "2"
* @apiParam {text} isRepeatable "daily"
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
 * [{"id":38,"name":"test ime","description":"test description","datetime":"2017-05-28T12:30:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]}]
 *
 *
 * @apiErrorExample {json} Error Response Example:
 *
 * {}
 *
 *
 *//**
 * @api {POST} http://localhost/asc/backend/web/api/event/create event/create
 * @apiName POST/event/create
 * @apiGroup events
 * @apiDescription ...
 *
 *
 * @apiHeader Authorization: Bearer  VeXnOTNog70h2yjla8coXTIuKq-8eK5e
Content-Type: application/x-www-form-urlencoded

 * 
 * @apiParam {text} name "test ime"
* @apiParam {text} description "test description"
* @apiParam {text} date "2017-05-03T22:00:00+00:00"
* @apiParam {text} participants[] "2"
* @apiParam {text} isRepeatable "daily"
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
 * {"id":39,"name":"test ime","description":"test description","datetime":"1970-01-01T00:00:00+00:00","participants":[{"id":2,"username":"vilim.stubican.gmail","avatar":"https://lh6.googleusercontent.com/-qeMXtiAEHUQ/AAAAAAAAAAI/AAAAAAAAAAA/AHalGhqHQsScvcekIK4ReyPXFBCkTzT7gw/s96-c/photo.jpg"},{"id":1,"username":"jewbre","avatar":"http://graph.facebook.com/10211914331389866/picture?width=96&height=96"}]}
 *
 *
 */