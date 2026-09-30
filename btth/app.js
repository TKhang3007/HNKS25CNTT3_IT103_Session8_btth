let queue = ['30A-111', '29B-222', '51C-333'];

console.log("Hàng đợi ban đầu:");
console.log(queue);

let newCar = '43D-444';

queue.push(newCar);

console.log("Sau khi xe mới đến:");
console.log(queue);

let checkCar = '43D-444';

if (queue.includes(checkCar)) {
    console.log(checkCar + " đang có trong hàng đợi.");
} else {
    console.log(checkCar + " không có trong hàng đợi.");
}

let priorityCar = '14A-999';

queue.splice(1, 0, priorityCar);

console.log("Sau khi chèn xe ưu tiên:");
console.log(queue);

let position = queue.indexOf(priorityCar);

console.log("Vị trí của xe ưu tiên " + priorityCar + " là: " + position);

let chargingCar = queue.shift();

console.log("Xe vào cổng sạc:");
console.log(chargingCar);

console.log("Hàng đợi sau khi xe đầu tiên rời hàng:");
console.log(queue);

let kwhList = [30, 45, 25];

let pricePerKwh = 4500;

let totalKwh = 0;

for (let i = 0; i < kwhList.length; i++) {
    totalKwh += kwhList[i];
}

let totalMoney = totalKwh * pricePerKwh;

console.log("========== BÁO CÁO CA TRỰC ==========");
console.log("Tổng điện năng tiêu thụ: " + totalKwh + " kWh");
console.log("Đơn giá: " + pricePerKwh.toLocaleString("vi-VN") + " VNĐ/kWh");
console.log("Tổng doanh thu: " + totalMoney.toLocaleString("vi-VN") + " VNĐ");
console.log("Hàng đợi còn lại:");
console.log(queue);
console.log("======================================");