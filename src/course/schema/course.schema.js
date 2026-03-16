"use strict";
var __esDecorate = (this && this.__esDecorate) || function (ctor, descriptorIn, decorators, contextIn, initializers, extraInitializers) {
    function accept(f) { if (f !== void 0 && typeof f !== "function") throw new TypeError("Function expected"); return f; }
    var kind = contextIn.kind, key = kind === "getter" ? "get" : kind === "setter" ? "set" : "value";
    var target = !descriptorIn && ctor ? contextIn["static"] ? ctor : ctor.prototype : null;
    var descriptor = descriptorIn || (target ? Object.getOwnPropertyDescriptor(target, contextIn.name) : {});
    var _, done = false;
    for (var i = decorators.length - 1; i >= 0; i--) {
        var context = {};
        for (var p in contextIn) context[p] = p === "access" ? {} : contextIn[p];
        for (var p in contextIn.access) context.access[p] = contextIn.access[p];
        context.addInitializer = function (f) { if (done) throw new TypeError("Cannot add initializers after decoration has completed"); extraInitializers.push(accept(f || null)); };
        var result = (0, decorators[i])(kind === "accessor" ? { get: descriptor.get, set: descriptor.set } : descriptor[key], context);
        if (kind === "accessor") {
            if (result === void 0) continue;
            if (result === null || typeof result !== "object") throw new TypeError("Object expected");
            if (_ = accept(result.get)) descriptor.get = _;
            if (_ = accept(result.set)) descriptor.set = _;
            if (_ = accept(result.init)) initializers.unshift(_);
        }
        else if (_ = accept(result)) {
            if (kind === "field") initializers.unshift(_);
            else descriptor[key] = _;
        }
    }
    if (target) Object.defineProperty(target, contextIn.name, descriptor);
    done = true;
};
var __runInitializers = (this && this.__runInitializers) || function (thisArg, initializers, value) {
    var useValue = arguments.length > 2;
    for (var i = 0; i < initializers.length; i++) {
        value = useValue ? initializers[i].call(thisArg, value) : initializers[i].call(thisArg);
    }
    return useValue ? value : void 0;
};
var __setFunctionName = (this && this.__setFunctionName) || function (f, name, prefix) {
    if (typeof name === "symbol") name = name.description ? "[".concat(name.description, "]") : "";
    return Object.defineProperty(f, "name", { configurable: true, value: prefix ? "".concat(prefix, " ", name) : name });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CourseSchema = exports.Course = exports.Lesson = void 0;
var mongoose_1 = require("@nestjs/mongoose");
// Sub-dokumen untuk Lesson (tidak butuh collection sendiri)
var Lesson = function () {
    var _classDecorators = [(0, mongoose_1.Schema)()];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _videoUrl_decorators;
    var _videoUrl_initializers = [];
    var _videoUrl_extraInitializers = [];
    var _duration_decorators;
    var _duration_initializers = [];
    var _duration_extraInitializers = [];
    var Lesson = _classThis = /** @class */ (function () {
        function Lesson_1() {
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.videoUrl = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _videoUrl_initializers, void 0));
            this.duration = (__runInitializers(this, _videoUrl_extraInitializers), __runInitializers(this, _duration_initializers, void 0)); // dalam menit
            __runInitializers(this, _duration_extraInitializers);
        }
        return Lesson_1;
    }());
    __setFunctionName(_classThis, "Lesson");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _videoUrl_decorators = [(0, mongoose_1.Prop)()];
        _duration_decorators = [(0, mongoose_1.Prop)()];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _videoUrl_decorators, { kind: "field", name: "videoUrl", static: false, private: false, access: { has: function (obj) { return "videoUrl" in obj; }, get: function (obj) { return obj.videoUrl; }, set: function (obj, value) { obj.videoUrl = value; } }, metadata: _metadata }, _videoUrl_initializers, _videoUrl_extraInitializers);
        __esDecorate(null, null, _duration_decorators, { kind: "field", name: "duration", static: false, private: false, access: { has: function (obj) { return "duration" in obj; }, get: function (obj) { return obj.duration; }, set: function (obj, value) { obj.duration = value; } }, metadata: _metadata }, _duration_initializers, _duration_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Lesson = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Lesson = _classThis;
}();
exports.Lesson = Lesson;
var LessonSchema = mongoose_1.SchemaFactory.createForClass(Lesson);
var Course = function () {
    var _classDecorators = [(0, mongoose_1.Schema)({ timestamps: true })];
    var _classDescriptor;
    var _classExtraInitializers = [];
    var _classThis;
    var _title_decorators;
    var _title_initializers = [];
    var _title_extraInitializers = [];
    var _description_decorators;
    var _description_initializers = [];
    var _description_extraInitializers = [];
    var _status_decorators;
    var _status_initializers = [];
    var _status_extraInitializers = [];
    var _lessons_decorators;
    var _lessons_initializers = [];
    var _lessons_extraInitializers = [];
    var Course = _classThis = /** @class */ (function () {
        function Course_1() {
            this.title = __runInitializers(this, _title_initializers, void 0);
            this.description = (__runInitializers(this, _title_extraInitializers), __runInitializers(this, _description_initializers, void 0));
            this.status = (__runInitializers(this, _description_extraInitializers), __runInitializers(this, _status_initializers, void 0));
            // Kekuatan NoSQL: Lesson disimpan sebagai array objek di dalam Course
            this.lessons = (__runInitializers(this, _status_extraInitializers), __runInitializers(this, _lessons_initializers, void 0));
            __runInitializers(this, _lessons_extraInitializers);
        }
        return Course_1;
    }());
    __setFunctionName(_classThis, "Course");
    (function () {
        var _metadata = typeof Symbol === "function" && Symbol.metadata ? Object.create(null) : void 0;
        _title_decorators = [(0, mongoose_1.Prop)({ required: true })];
        _description_decorators = [(0, mongoose_1.Prop)()];
        _status_decorators = [(0, mongoose_1.Prop)({ default: 'draft', enum: ['draft', 'published', 'archived'] })];
        _lessons_decorators = [(0, mongoose_1.Prop)({ type: [LessonSchema], default: [] })];
        __esDecorate(null, null, _title_decorators, { kind: "field", name: "title", static: false, private: false, access: { has: function (obj) { return "title" in obj; }, get: function (obj) { return obj.title; }, set: function (obj, value) { obj.title = value; } }, metadata: _metadata }, _title_initializers, _title_extraInitializers);
        __esDecorate(null, null, _description_decorators, { kind: "field", name: "description", static: false, private: false, access: { has: function (obj) { return "description" in obj; }, get: function (obj) { return obj.description; }, set: function (obj, value) { obj.description = value; } }, metadata: _metadata }, _description_initializers, _description_extraInitializers);
        __esDecorate(null, null, _status_decorators, { kind: "field", name: "status", static: false, private: false, access: { has: function (obj) { return "status" in obj; }, get: function (obj) { return obj.status; }, set: function (obj, value) { obj.status = value; } }, metadata: _metadata }, _status_initializers, _status_extraInitializers);
        __esDecorate(null, null, _lessons_decorators, { kind: "field", name: "lessons", static: false, private: false, access: { has: function (obj) { return "lessons" in obj; }, get: function (obj) { return obj.lessons; }, set: function (obj, value) { obj.lessons = value; } }, metadata: _metadata }, _lessons_initializers, _lessons_extraInitializers);
        __esDecorate(null, _classDescriptor = { value: _classThis }, _classDecorators, { kind: "class", name: _classThis.name, metadata: _metadata }, null, _classExtraInitializers);
        Course = _classThis = _classDescriptor.value;
        if (_metadata) Object.defineProperty(_classThis, Symbol.metadata, { enumerable: true, configurable: true, writable: true, value: _metadata });
        __runInitializers(_classThis, _classExtraInitializers);
    })();
    return Course = _classThis;
}();
exports.Course = Course;
exports.CourseSchema = mongoose_1.SchemaFactory.createForClass(Course);
