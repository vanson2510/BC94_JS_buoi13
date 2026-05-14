function TinhTienThue() {
    const hoTen = document.getElementById("hoTen").value.trim();
    const tongThuNhapNam = document.getElementById("tongThuNhapNam").value * 1;
    const soNguoiPhuThuoc = document.getElementById("soNguoiPhuThuoc").value * 1;
    const showInfo = document.getElementById("showInfo");

    if (hoTen === "" || isNaN(tongThuNhapNam) || isNaN(soNguoiPhuThuoc) || tongThuNhapNam < 0 || soNguoiPhuThuoc < 0) {
        showInfo.innerHTML = `Vui lòng nhập đầy đủ và chính xác các thông tin!`;
        return;
    }

    //Tính thu nhập chịu thuế
    let thuNhapTrieu = tongThuNhapNam / 1000000;
    let thuNhapChiuThue = thuNhapTrieu - 4 - (soNguoiPhuThuoc * 1.6);
    let thueSuat = 0;
    if (thuNhapChiuThue <= 0) {
        thueSuat = 0;
    } else if (thuNhapChiuThue <= 60) {
        thueSuat = 5;
    } else if (thuNhapChiuThue <= 120) {
        thueSuat = 10;
    } else if (thuNhapChiuThue <= 210) {
        thueSuat = 15;
    } else if (thuNhapChiuThue <= 384) {
        thueSuat = 20;
    } else if (thuNhapChiuThue <= 624) {
        thueSuat = 25;
    } else if (thuNhapChiuThue <= 960) {
        thueSuat = 30;
    } else {
        thueSuat = 35;
    }
    let thuePhaiTraTrieu = thuNhapChiuThue * (thueSuat / 100);
    let thuePhaiTraVND = thuePhaiTraTrieu * 1000000;
    let thueDinhDang = thuePhaiTraVND.toLocaleString('en-US');
    showInfo.innerHTML = `Họ Tên: ${hoTen} - Tiền thuế thu nhập cá nhân: ${thueDinhDang} VND`;

};