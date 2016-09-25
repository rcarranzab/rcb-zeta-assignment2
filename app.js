(function () {
  'use strict';

  angular.module('ShoppingListCheckOff', [])
  .controller('ToBuyShoppingController', ToBuyShoppingController)
  .controller('AlreadyBoughtShoppingController', AlreadyBoughtShoppingController)
  .service('ShoppingListCheckOffService', ShoppingListCheckOffService);

  ToBuyShoppingController.$inject = ['ShoppingListCheckOffService'];
  function ToBuyShoppingController(ShoppingListCheckOffService) {
    var toBuy = this;

    toBuy.itemsList = ShoppingListCheckOffService.getToBuyList();

    toBuy.buyItem = function (itemIndex) {
      ShoppingListCheckOffService.buyItem(itemIndex);
    };

    toBuy.isListEmpty = function () {
      return toBuy.itemsList.length === 0;
    };
  }

  AlreadyBoughtShoppingController.$inject = ['ShoppingListCheckOffService'];
  function AlreadyBoughtShoppingController(ShoppingListCheckOffService) {
    var alreadyBought = this;

    alreadyBought.itemsList = ShoppingListCheckOffService.getBoughtList();

    alreadyBought.isListEmpty = function () {
      return alreadyBought.itemsList.length === 0;
    };
  }

  function ShoppingListCheckOffService() {
    var service = this;
    var toBuyList =[
      { name: "Product One",
        quantity: 2
      },
      { name: "Product Two",
        quantity: 4
      },
      { name: "Product Three",
        quantity: 3
      },
      { name: "Product Four",
        quantity: 1
      },
      { name: "Product Five",
        quantity: 2
      },
      { name: "Product Six",
        quantity: 5
      },
      { name: "Product Seven",
        quantity: 3
      },
    ];
    var boughtList = [];

    service.buyItem = function (itemIndex) {
      var item = toBuyList[itemIndex];
      boughtList.push(item);
      toBuyList.splice(itemIndex, 1);
    };

    service.getToBuyList = function () {
      return toBuyList;
    };

    service.getBoughtList = function () {
      return boughtList;
    };

  }

})();
