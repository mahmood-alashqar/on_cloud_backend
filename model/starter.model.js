class Shop {

  constructor(data) {
     this.comments = new Array();
      this.id=data.id;
      this.name = data.name;
      this.slug = data.name.toLowerCase().split(' ').join('-');
      this.img =`http://${data.imageUrl}`;
      this.price = `${data.price.current.value}${data.price.currency}`;
      this.colour = data.colour;
      this.brand=data.brandName;
      this.comment=data.url;
     this.comments.push('');
    }
  }
  module.exports = Shop;