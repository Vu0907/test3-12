function Validation() {
  this.ktRong = function (value, errowId, message) {
    if (value == "") {
      getEle(errowId).innerHTML = "(*) " + message + " không được để trống";
      getEle(errowId).style.display = "block";
      return false;
    } else {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    }
  };
  this.ktChuoikitu = function (value, errowId, message) {
    var letter =
      "^[a-zA-Z_ÀÁÂÃÈÉÊẾÌÍÒÓÔÕÙÚĂĐĨŨƠàáâãèéêìíòóôõùúăđĩũơƯĂẠẢẤẦẨẪẬẮẰẲẴẶ" +
      "ẸẺẼỀỀỂưăạảấầẩẫậắằẳẵặẹẻẽềềểếỄỆỈỊỌỎỐỒỔỖỘỚỜỞỠỢỤỦỨỪễệỉịọỏốồổỗộớờởỡợ" +
      "ụủứừỬỮỰỲỴÝỶỸửữựỳỵỷỹ\\s]+$";
    if (value.match(letter)) {
      getEle(errowId).innerHTML = "";
      getEle(errowId).style.display = "none";
      return true;
    } else {
      getEle(errowId).innerHTML = message;
      getEle(errowId).style.display = "block";
      return false;
    }
  };
}
