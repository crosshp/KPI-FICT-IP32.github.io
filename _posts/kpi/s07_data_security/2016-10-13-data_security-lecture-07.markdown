---
layout: post
title: "Лекція 7. Класифікація криптосистем. Шифр Цезаря"
date: 2016-10-13 14:15:00 +0300
categories: kpi_s07_data_security
---
# Розділ 3. Криптографічні моделі.

## 2. Класифікація криптографічних систем

- Прості криптографічні системи
  - шифр Цезаря
  - шифр Шенона
- Складні криптографічні системи
  - потокові
    - B-crypt
  - блочні
    - симетричні
      - DES
      - ГОСТ 28147-89
      - AES (RCS, MARS, TWO-FISH)
    - асиметричні
      - RSA
      - Al-Gamal

Прості критосистеми на практиці не застосовуються. Вони мають важливе теоретичне значення, оскільки деякі механізми таких систем успішно використовуються у складних криптосистемах.

Потокові криптосистеми орієнтовані на шифрування потоку даних.

В симетричних системах для шифрування використовується 1 ключ. Тут виникає проблема -- як передати той єдиний ключ так, щоб він не потрапив у руки злочинців?

В асиметричних системах використовується 2 ключі. За допомогою одного ключа дані шифруються, а за допомогою іншого -- розшифровуються. Таким чином немає потреби у передачі секретного ключа -- ключ для шифрування можна передавати відкрито -- за допомогою нього не можна розшифрувати дані. Але асиметричні системи працюють помітно повільніше за симетричні.

Часто використовують такий підхід. Мастер-ключ симетричної системи шифрують асиметричним алгоритмом та передають. Після того, як симетричний ключ є у всіх зацікавлених сторін, використовується симетрична крипто-система для передачі безпосередньо інформації.

## 3. Шифр Цезаря

Суть: циклічний зсув алфавіту на $$ N $$ позицій. В класичному варіанті $$ N = 2 $$. Таким чином маємо такі перетворення:

|  Orig  |  New  |
|--------|-------|
| $$A$$  | $$C$$ |
| $$B$$  | $$D$$ |
| $$C$$  | $$E$$ |
|   …    |   …   |
| $$X$$  | $$Z$$ |
| $$Y$$  | $$A$$ |
| $$Z$$  | $$B$$ |

Формально перетворення алгоритму Цезаря можна задати такою формулою:

$$ e(s) = (d(s) + 2) \mod A $$

$$ d(s) = (e(s) - 2) \mod A $$

Враховуючи, що в загальному випадку зсув може бути довільним, маємо

$$ e(s) = (k \cdot d(s) + c) \mod A $$

$$ d(s) = (\frac{e(s)}{k} - c) \mod A $$

Проблемою цього алгоритму є те, що зашифрований текст має ті самі статистичні особливості, що й вихідний текст. Також цей шифр не має ключа.
 
Алгоритм Цезаря -- це типовий алгоритм підстановки. Він може бути представлений у вигляді S-блоку (S -- Substitution -- перестановка)

## 4. Шифр Шенона

Використовує функцію $$XOR$$, та наступну її особливість:

$$ A \oplus K = B $$

$$ B \oplus K = A $$

В загальному випадку маємо:

$$ D = D_1 \cup D_2 \cup D_3 \cup … \cup D_n $$

$$ K = K_1 \cup K_2 \cup K_3 \cup … \cup K_n $$

Застосувавши XOR маємо:

$$ E = E_1 \cup E_2 \cup … \cup E_n $$


Часто з цим шифром застосовується ЛКГ -- генератор.

$$ W_{i+1}=frac(\frac{A \cdot W_i + C}{D}) $$, де

$$ frac(1.02) = 0.02 $$ -- функція отримання дробової частини

Тоді $$ W_i \to K_i $$

Цей генератор використовується для генерації ключів.

У схемі Шенона проблема полягає в тому, що _XOR_ належить до найпростіших операцій, відповідно, для підбору результатів розшифрованого тексту по шифротексту не потрібно значних обчислювальних потужностей.

Даний метод може бути дешифрований навіть шляхом прямого перебору.

В результаті виникло таке поняття, як _функція шифрування_ Це перетворення повинно мати комплексний нелінійний характер.

Алгоритм Шенона може бути представлений у вигляді P-блоку (P -- Permutation -- перестановка)
