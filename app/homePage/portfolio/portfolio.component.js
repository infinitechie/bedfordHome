"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var portfolio_service_1 = require('../portfolio/service/portfolio.service');
var PortfoloComponent = (function () {
    // currentUpload: Upload;
    function PortfoloComponent(portfolioService) {
        this.portfolioService = portfolioService;
        this.portfolioArray = [];
        this.imageArray = [];
    }
    PortfoloComponent.prototype.ngAfterViewInit = function () {
        this.getStock();
        this.getUpdatedUser();
        // this.getUpdatedUser();
    };
    PortfoloComponent.prototype.getStock = function () {
        var _this = this;
        this.portfolioArray = [];
        this.portfolioService.grabStockArray()
            .subscribe(function (image) {
            console.log(image);
            // this.setImage(stock);
            // this.imageSrc = null;
            _this.grabImageUrl(image);
            _this.portfolioArray.push(image);
            // this.imageArray.push(stock.imageUrl);
            console.log(_this.portfolioArray);
        }, function (err) {
            console.error("unable to add bug -", err);
        });
    };
    PortfoloComponent.prototype.grabImageUrl = function (currentImage) {
        this.portfolioService.stockStorageRef.child(currentImage.imageUrl).getDownloadURL().then(function (url) {
            // console.log(url)
            return currentImage.imageStorageRef = url;
        }).catch(function (error) {
            // Handle any errors
            console.log(error);
        });
    };
    // detectFiles(event) {
    //     this.selectedFiles = event.target.files;
    //   }
    //   uploadSingle(currentImage?: Portfolio) {
    //     let file = this.selectedFiles.item(0)
    //     this.currentUpload = new Upload(file);
    //     this.upSvc.uploadPortfolio(this.currentUpload, "portfolio");
    //     // window.location.reload();
    //   }
    //    updateBug(newImage?: Portfolio) {
    //        if (newImage) {
    //         const currentBugRef = this.portfolioService.portfolioRef.child(newImage.id);
    //         console.log(newImage.id);
    //         let file = this.selectedFiles.item(0)
    //         this.currentUpload = new Upload(file);
    //         this.upSvc.pushUpload(this.currentUpload,newImage.id, "portfolio");
    //         // newImage.id = null;
    //         // currentBugRef.update(newImage);
    //        } else {
    //            console.log("No crash bigash");
    //        }
    //     }
    PortfoloComponent.prototype.getUpdatedUser = function () {
        var _this = this;
        this.portfolioService.changedListener()
            .subscribe(function (updatedUser) {
            var userIndex = _this.portfolioArray.map(function (index) { return index.id; }).indexOf(updatedUser['id']);
            _this.portfolioArray[userIndex] = updatedUser;
        }, function (err) {
            console.error("Unable to get updated bug - ", err);
        });
    };
    PortfoloComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: 'portfolio',
            templateUrl: 'portfolio.component.html',
            styleUrls: ['portfolio.component.css']
        }), 
        __metadata('design:paramtypes', [portfolio_service_1.PortfolioService])
    ], PortfoloComponent);
    return PortfoloComponent;
}());
exports.PortfoloComponent = PortfoloComponent;
//# sourceMappingURL=portfolio.component.js.map