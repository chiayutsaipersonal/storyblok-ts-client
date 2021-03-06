"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var path = require("path");
var imageProcessing_1 = require("../../utilities/imageProcessing");
var Asset = /** @class */ (function () {
    function Asset(apiClient, filePath, assetFolder) {
        this.apiClient = apiClient;
        this.assetFolder = assetFolder;
        this.filePath = filePath;
        this.data = {
            filename: path.parse(this.filePath).base,
        };
    }
    Object.defineProperty(Asset.prototype, "isSynced", {
        get: function () {
            var baseUrl = '//a.storyblok.com/f/';
            return this.data.filename.includes(baseUrl);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Asset.prototype, "prettyUrl", {
        get: function () {
            if (!this.isSynced) {
                throw new Error('uninitialized asset');
            }
            return this.data.filename;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Asset.prototype, "publicUrl", {
        get: function () {
            if (!this.isSynced) {
                throw new Error('uninitialized asset');
            }
            return this.data.filename.replace('//a.storyblok.com/f', 'https://s3.amazonaws.com/a.storyblok.com/f');
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(Asset.prototype, "folder", {
        get: function () {
            return this.assetFolder ? this.assetFolder.name : undefined;
        },
        enumerable: true,
        configurable: true
    });
    Asset.prototype.generatePhoto = function () {
        var _this = this;
        if (this.assetFolder && this.assetFolder.id) {
            this.data.asset_folder_id = this.assetFolder.id;
        }
        return this.apiClient.assets
            .createFromImage(this.data, this.filePath, true, 640)
            .then(function (prettyUrl) {
            _this.data.filename = prettyUrl;
            return console.log("'" + _this.prettyUrl + "' is created");
        })
            .catch(function (e) { return Promise.reject(e); });
    };
    Asset.prototype.generateImage = function () {
        var _this = this;
        if (this.assetFolder && this.assetFolder.id) {
            this.data.asset_folder_id = this.assetFolder.id;
        }
        var methods = this.apiClient.assets;
        return methods
            .register(this.data)
            .then(function (registration) {
            return imageProcessing_1.imageToBuffer(_this.filePath, false)
                .then(function (buffer) { return methods.upload(buffer, registration); })
                .catch(function (e) { return Promise.reject(e); });
        })
            .then(function (prettyUrl) {
            _this.data.filename = prettyUrl;
            return console.log("'" + _this.prettyUrl + "' is created");
        })
            .catch(function (e) { return Promise.reject(e); });
    };
    return Asset;
}());
exports.Asset = Asset;
//# sourceMappingURL=Asset.js.map