var donations = [];
document.addEventListener('DOMContentLoaded', function () {
    var plan = localStorage.getItem('packageData');
    if (plan) {
        donations = JSON.parse(plan);
    }
    else {
        donations = [
            {
                cardholder_name: 'ABC', card_number: '1234-5678-9012-3456', transaction_date: 'DD/MM/YYYY', mail_to: 'ABC', mail_from: 'XYZ',
                receipient_mail: 'abc@mail.com', amount: '1000000'
            }
        ];
    }
    getting_order_number();
    display_payment_details();
    console.log(donations);
});

function display_payment_details() {
    var Name_of_user, Cardnumber_of_user, PurchasedDate, MailOfUser, donation_date;
    Name_of_user = document.getElementById("name_of_card");
    Cardnumber_of_user = document.getElementById("cardnum_of_user");
    PurchasedDate = document.getElementById('date_with_time');
    MailOfUser = document.getElementById('email');
    donation_date = new Date();
    Name_of_user.innerHTML = donations[donations.length - 1].cardholder_name;
    Cardnumber_of_user.innerHTML = donations[donations.length - 1].card_number;
    PurchasedDate.innerHTML = donation_date.getDate() + "/" + donation_date.getMonth() + 1 + "/" + donation_date.getFullYear();
    MailOfUser.innerHTML = donations[donations.length - 1].receipient_mail;
}


function getting_order_number() {
    order_number = Math.floor((Math.random() * 10e9));
    document.getElementById('o-number').innerHTML = "Transaction No: " + order_number;
}