---
layout: post
title:  "Лекція 3. Моделі засобів захисту інформації"
date:   2016-09-15 14:15:00 +0300
categories: kpi_s07_data_security
---

## 7. Базові моделі побудови ЗЗІ

Виділяють 3 базові моделі, які в загальному випадку дозволяють описати механізм взаємодії суб'єктів по відношенню до об'єктів в рамках КС, яку захищають.

1. **Модель Белла та ЛаПадули є найбільш універсальною моделлю: більшість ЗЗІ будуються за заданою моделлю.

   ```
     +-X-X-X-X-X-X-X-X-X+   
     |                  |   
     v                  v    
   +---+              +---+
   |   |    +----+    |   |
   | S |<-->| ДД |<-->| O |
   |   |    +----+    |   |
   +---+      ^       +---+
              |
              v             
           +-----+         
           | |R| |        
           +-----+         
   
   ДД -- Диспечер доступу
   |R| -- Матриця доступу
   
   s\o|o1|o2|o3|
   ---+--+--+--+
    s1| 1| 0|  |  
   ---+--|--+--+
    s2| 0| 1|  |  
   ---+--|--+--+
    s3| 0| 1|  |  
   ---+--+--+--+
   ```
   Початковою умовою для використання даної моделі є чіткий поділ усіх учасників КС на об'єкти та суб'єкти.
                           
2. **Модель Денінга (Low Water Marks, LWM)**. Модель концентричних кілець.

   ```
           +----------------------------+  
           |                            |  
           |  +-------------------+-+   |   
           |  |                     |   |   
           |  |  +---------------+  |   |                  
           |  |  |               |  |   |   
           |  |  |  +---------+  |  |   |                       
           |  |  |  |         |  |  |   |   
           |  |  |  |  +---+  |  |  |   |        
       |   |  |  |  |  | p |  |  |  |   |    ^     
      R|   |  |  |  |  +---+  |  |  |   |    |      
      E|   |  |  |  |    g    |  |  |   |    |W
      A|   |  |  |  +---------+  |  |   |    |R
      D|   |  |  |       p       |  |   |    |I
       |   |  |  +---------------+  |   |    |T                
       |   |  |          g          |   |    |E
       |   |  +---------------------+   |    | 
       |   |             p              |    |
       |   +----------------------------+    |
       v                 g                   |
   
     Кільце -- рівень доступу
     Правила запису -- в своє і усі внутрішні кільця
     Правила читання -- своє та усі зовнішні кільця
   ```

   В даній моделі передбачається обов'язкове розбиття інформації по рівнях секретності. Кільця відповідають певному рівню секретності інформації. Секретність підвищується з наближенням до центру.Існують групові (g) і персональні (p) права, вони чередуються кільцями.


3. **Модель Лендвіра**. Лендвір запропонував розглядати КС, як певний чорний ящик з відомими входом та виходом.

   ```
            +--------------------+                                    
     IN     |                    |   OUT         
     ------>|         КС         |------>               
            |                    |               
            +--------------------+               
                                                                    
   ```
   Дані та права доступу перевіряються тільки на вході та виході із КС, контроль за тим, що відбувається всередині системи, не здійснюється.
   Дана модель не має властивості універсальності. Тому є сенс застосовувати її тільки у тих випадках, коли увімкнений внутрішній контроль системи.

Таким чином універсальною з трьох наведених є тільки модель Белла та ЛаПадули. Дві інші моделі є сенс застосовувати у комбінації з моделлю Белла та ЛаПадули

Вцілому, можливо застосовувати усі три моделі одночасно.

## 8. Модель моніторингу безпеки КС
**Моніторинг безпеки** -- комплексна система слідкування за станом захищеності ресурсів КС.

Моніторинг дозволяє виявити спроби пасивних вторгнень зі сторони злочинця. Тобто, фактично виявити підготовку до вторгнення, причому на ранньому етапі ще до початку власне вторгнення.
Для підтримки моніторингу розроблена спеціальна модель моніторингу на основі *алгоритму найбільших статичних аномалій* (АНСА).

1. $$ \vec{x} = (x_1, x_2, x_3, \dots,  x_n) $$, де $$x_i$$ -- фактор, реалізація якого впливає на ймовірність НСД. Наприклад, кількість спроб входу в систему з паролем, кількість спроб зверитання до захищених областей пам'яті, $$x_3$$ -- к-ть спроб звертання до системних функцій.
2. Визначення порогового вектору $$ \vec{x_{\max}} = (x_{1 \max}, x_{2 \max}, \dots, x_{n \max}) $$, де $$ x_{i \max} $$ -- максимальне значення i-го фактору, яке не вважається НСД.
3. Формування вектору Бернуллі $$ \vec{b} = (b_1, b_2, \dots, b_n) $$, де $$ b_i = \begin{cases} 1 \text{ якщо } x_i > K_d * x_{i \max} \\ 0 \text{ в усіх інших випадках } \end{cases} $$; $$ К_d $$ -- коефіціент небезпеки
4. Визначення ймовірності небезпеки зі сторони суб'єкта s в сеансі. $$ p_{s_i} = \displaystyle\sum_{i = 1 }^{n} (b_{s_i} \cdot w_i) $$, де $$ w_i $$ -- вагові коефіціенти, причому $$ \displaystyle\sum_{i = 1}^{n}(w_i) = 1 $$
5. Оцінка $$ LS_s $$ -- рівня підозрілості (Level of suspicios) суб'єкта s: $$ LS_s = \displaystyle\sum_{i = 1}^{n}(p_{s_i}) $$. Якщо $$ LS_s > LS_{s \max} $$, то користувача `s` вважають злочинцем.
