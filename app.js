let a = prompt('hafta nomini kiriting');
let sum;

switch (a) {
    case 'dushanba': sum = 'bugun dushanba ';
        break;
    case 'seshanba': sum = 'bugun seshanba';
        break;
    case 'chorshanba': sum = 'chorshanba';
        break;
    case 'payshanba': sum = 'payshanba';
        break;
    case 'juma': sum = 'juma';
        break;
    case 'shanba': sum = 'shanba';
        break;
}document.write(sum)