<?php

  $name = $_POST['name'];
  $phone = $_POST['phone'];
  $street = $_POST['street'];
  $home = $_POST['home'];
  $block = $_POST['block'];
  $apartment = $_POST['apartment'];
  $floor = $_POST['floor'];
  $comment = $_POST['comment'];
  $payment = $_POST['payment'];

  $distrab = $_POST['distrab'];
  $distrab = isset($distrab) ? 'Нет' : 'Да';

  $mail_messange = '
    <html>
      <head>
        <title>Заказ</title>
      </head>
      <body>
        <h2>Заявка</h2>
        <ul>
          <li>Имя: ' . $name . '</li>
          <li>Телефон: ' . $phone . '</li>
          <li>Улица: ' . $street . '</li>
          <li>Дом: ' . $home . '</li>
          <li>Блок: ' . $block . '</li>
          <li>Квартира: ' . $apartment . '</li>
          <li>Этаж: ' . $floor . '</li>
          <li>Комментарий к заказу: ' . $comment . '</li>
          <li>Способ оплаты: ' . $payment . '</li>
          <li>Перезвонить клиенту: ' . $distrab . '</li>
        </ul>
      </body>
    </html>';

  $headers = "From: Администратор сайта\r\n".
  "MINE-Version: 1.0"."\r\n".
  "Content-type: text/html; charset=UTF-8"."\r\n";

  $data = [];

  if ($name == "") {
    $data['status'] = "false";
    $data['mes'] = "Поле имя постое!";
  }

  if ($phone == "") {
    $data['status'] = "false";
    $data['mes'] = "Поле телефон постое!";
  }

  if ($data['status'] != "false") {
    $mail = mail('frosten2772@yandex.ru', 'Заказ', $mail_messange, $headers);

    if ($mail) {
      $data['status'] = "true";
      $data['mes'] = "Письмо успешно отправлено";
    } else {
      $data['status'] = "false";
      $data['mes'] = "На сервере произошла ошибка";
    }
  }

  echo json_encode($data);
?>
