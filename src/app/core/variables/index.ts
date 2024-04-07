import { Review } from '../interfaces';

export const Reviews: Review[] = [
  {
    username: 'Тетяна',
    publicationDate: '12.22.2023',
    content:
      'Магазин килимів - справжнє відкриття! Вражаючий вибір високоякісних килимів, що вражають різноманіттям стилів та дизайнів. Обслуговування на високому рівні, де кожен працівник виявився професіоналом. Вдала покупка перевершила мої очікування - отримав точно те, що шукав. Дякую за приємний досвід покупки, рекомендую цей магазин як надійного партнера у виборі ідеального килима для вашого простору. Неперевершений вибір, висока якість та привітний персонал - ось, що робить цей магазин винятковим. Впевнено рекомендую усім, хто цінує комфорт і стиль у своєму житлі!',
    rating: 5,
  },
  {
    username: 'Тетяна',
    publicationDate: '12.22.2023',
    content:
      'Магазин килимів - справжнє відкриття! Вражаючий вибір високоякісних килимів, що вражають різноманіттям стилів та дизайнів. Обслуговування на високому рівні, де кожен працівник виявився професіоналом. Вдала покупка перевершила мої очікування - отримав точно те, що шукав. Дякую за приємний досвід покупки, рекомендую цей магазин як надійного партнера у виборі ідеального килима для вашого простору. Неперевершений вибір, висока якість та привітний персонал - ось, що робить цей магазин винятковим. Впевнено рекомендую усім, хто цінує комфорт і стиль у своєму житлі!',
    rating: 3,
  },
  {
    username: 'Тетяна',
    publicationDate: '12.22.2023',
    content:
      'Магазин килимів - справжнє відкриття! Вражаючий вибір високоякісних килимів, що вражають різноманіттям стилів та дизайнів. Обслуговування на високому рівні, де кожен працівник виявився професіоналом. Вдала покупка перевершила мої очікування - отримав точно те, що шукав. Дякую за приємний досвід покупки, рекомендую цей магазин як надійного партнера у виборі ідеального килима для вашого простору. Неперевершений вибір, висока якість та привітний персонал - ось, що робить цей магазин винятковим. Впевнено рекомендую усім, хто цінує комфорт і стиль у своєму житлі!',
    rating: 1,
  },
];

export interface Product {
  id: string;
  name: string;
  group?: string; // хіт новинка акція
  oldPrice?: number;
  currentPrice: number;
  // Категорія продукту
  category: string;
  // Необов'язкове поле, що вказує на наявність знижки на продукт
  isDiscount?: boolean;
  // Виробник продукту
  manufacturer: string;
  // Одинична ціна продукту
  unit_price: number;
  // Опис продукту
  description: string;
  // Статус доступності продукту
  isAvailable: boolean;
  // Кількість продукту на складі
  quantity_in_stock: number;
  // Рейтинг популярності продукту
  popularity_rating: number;
  // Особливості продукту
  features: string[];
  // URL(и) зображення(ень) продукту
  product_image_url: string | string[];
  // Розміри доступні для продукту, з відповідними кількостями на складі
  sizes: {
    size: string;
    quantity_in_stock: number;
  }[];
  // Тип килима (якщо застосовується)
  rug_type: string;
  // Матеріал килима (якщо застосовується)
  rug_material: string;
  // Колір(и) килима (якщо застосовується)
  rug_color: string | string[];
  // Форма килима (якщо застосовується)
  rug_shape: string;
  // Країна походження килима (якщо застосовується)
  rug_country_of_origin: string;
  // Висота ворсу килима (якщо застосовується)
  rug_pile_height: number;
  // Матеріал підкладки килима (якщо застосовується)
  rug_backing_material: string;
  // Висота килима (якщо застосовується)
  rug_height: number;
  // SKU (номер одиниці обліку запасів) килима
  rug_sku: string | number;
  // Знижена ціна килима (якщо застосовується)
  rug_discounted_price?: number;
}

export const Products: Product[] = [
  {
    id: 'Килим 1',
    name: 'Килим 1',
    group: 'Новинка',
    category: 'rugs',
    isDiscount: true,
    currentPrice: 100,
    manufacturer: 'Виробник 1',
    unit_price: 100,
    description: 'Опис першого килима',
    isAvailable: true,
    quantity_in_stock: 10,
    popularity_rating: 4.5,
    features: ['Функція 1', 'Функція 2'],
    product_image_url:
      'data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAoHCBYVFRgWFhYYGRgYHBocGhoaHRwaGhwaGBoaGhwcGhocJC4lIR4rHxoaJjgmKy8xNTU1GiQ7QDs0Py40NTEBDAwMEA8QHhISHjUrJSs0NDQ2PTQ1NjQ0NDQ0NDQ0NDQ0NjQ0NDQ2NDQ0NDQ0NDY0NDQ0NDQ0MTQ0NDQ0NDQ0Mf/AABEIAQwAvAMBIgACEQEDEQH/xAAbAAABBQEBAAAAAAAAAAAAAAAFAQIDBAYAB//EAEEQAAECAwUECAQEBQMEAwAAAAEAAgMRIQQSMUFRBWFxkSJSgaGxwdHwMkKS4QYTFBVicoKi8SNT0iRDROIWMzT/xAAaAQACAwEBAAAAAAAAAAAAAAAAAQIDBAUG/8QAKhEAAwACAQMCBgIDAQAAAAAAAAECAxEhBDFREhQTIjJBYXGBkUKhsRX/2gAMAwEAAhEDEQA/ANNBj3gDWqlDjqqkDDgrAKgBK0nVHtlGg7fErPsKPbJNB2+JUpEGIeakULXSTmv3JjFOIT1GSuL9yAHOyTlHe3Jb25ACuSphcnAoAUqrajJjuHmrBcq1s+B3vVCAzL3GZ4qvaBTEqYlNckwAlocZ4nfPT0GMszLRRQ4r20DiBTonpDv4gdhRS0WUOVR9jdOYJWO+n29yzRGbS1SKcW3PIq4y6o6INL0pDUApkFrnGpMhnM8Jji2UxuVv9AJzNeO7BWGQZJxg1zQqzb4SJIZOpU7nHUqAKQuWkpFvHUpbx1KWCwOcATIa4q/+0PyLSNZn0QAEsr6DeAeYmrbSh1mf3U+mnkiNleL0iARoeCW9ISHyIAMjImU5K/ZrUWNEt/iqe0m3ZEUb0ejWQNa8k2E+g95lNMC/aLdEJEnuFMjLMqSLb4hAk4jWuNFQJr2KQlS2ILQtouDWzJJlXehse2xbxk9wEzgUhKY/FPYDhtCKGyvu4588Vwt0W6B+Y/HGdearuTglsYSdtB9yV8zpXPFTwtoODRMzMsTxKFOdROD/AAT2IuC3xC6rjKtBIZKO221zqXjdlgqzXJkQ4IbGJNISkmmkqADimFdNcgY1wUblIVE8oAamvfJdNLDbedJAFiEyitMe8CQcZLoTaKW6jQGPNqEJpL/l0rMkolYYt4MiAiTgSRMTGF0Y41OuSz1neIkAXnPFACWEXpsofi3jxToLnsBaYhew4h7Gbq9FwGQyVN5Jn5WSnG65Qe/EFpeC26ejcaZfxTdiOSq7H2q95cx7C0t+at0zJ1z5oeHOddZfLRPotbDbn/M8juRYdF0hOUqT7chQYYBEZZbUjrG0tsKMfUcFPNUYbsFaa7BXbKywU1yWaa5SAjTgkK4FRAc4pZqNxqnTUgHApkQ4JWpjzVRA6aRclAQMRcUpCtusjaC9I45H3ggCgSoHlEXWIdfu+6rxrEcnAo2BSBVuwsoXZ1l5KlFYW4ohY4jS2hmMEgLUISEtApodRNRtAIkn2chrQK0UgPNtmxDKIxwkSS8CfwtiNvAYceauuHkqseKDaBIYtLHcWkyPInkrRlKcxmcBn2LDn+o0YfpOaJOadHNPZNFbVEAiS/hB73fdB4rgAcKTyHyhWbcXue1zQJXBjxO7SSWFfMiWT6WgxCfgrgdh6oLAL5fCOf2VyG9/V7/styMgWD0hcFREZwHw9/2Tw9+g5/ZSAsFdNVXOfoOZ9Ek39Uc/sgCySuDlWN/qjn9kgdE6o5/ZAF5hSB407/soA50vh70rSdFEZPeGnf8A+qR8QNBJFACTXICfVUV9R2mZY6mR8KoAuRYRLA9pod2BWI23GtbHgtY94AlOGDOU3Go1rrkFutkWgEXTgfFEXw8kNAePHb9paJFloHGG7yCj/wDk0fSN9DvRevusd75e3LmoH7Gccmji4Ypa/AHkMX8UvHxOeOLXeYR38Hbc/Me8Tm0hssukJk+PctJtPZMiWuZUZET71l42zfyX/mQ2ykZuaBKe8fxeKWxm/gxVNNBtmWwPYHAzmESERSTEYU2J5eHhs2zvVpjjQpX2Z0sDl1cu1epshgiYMwmusrTiByVVYlT2Wy3PB5ULE91ADXc3PtWgslkddZexAAPYJDyWyMBgBMgAM6AKnadoMZ8IvHdRvNQr4eL5m9EkqvhAyHAkp2w5qAWuJfvzrhKl2WkvZRKBthhlfBbvFR6qGPrsVPT4/Y66ap/JVEDcpBZToeRRVj2uE2kEbkrpCpkBqaLWntbRS50CDZjoeRSuhBo6RDROQmZVOArmltO2GNowXjrUN+6AW60uinpmegl0RwCexaNILKk/ScEGs21XsAE7zQMDXTA4olZ9vsMg8Fu/4h69yYaLQsyQ2VWoUdjxNjmuG4z/AMKG0bQYyY+I6D1UXSlbbGp32KNpgBtZpYEOYkVVtdqL6nkov3IsFGz95quMqqmiVR6VsezovLWnAyFZVmRid4I4tKsbV/FkGzMvxGRHGd3osIZer8z7oOGVN6yGy9sMvxXRA4Oe8NmQRdhw6DKVXOe+c6zRzaFkbGZcfheB5ZjsPerexWXNi/jOz2sOBERhhtc4sdLpNbKZa5jpAgVkJURG2Qo0dn/TXWMcBIuBE54zMsMTMTJ71mW/gsQyYlmjvhl7ZXui4ymDLpNOYRTZsXacCj3wrUz+I/lv+qUieQT9QjQQtkSY1r3ue9rWtLhSchKcjPxQXaOx3iZaLw1bj2tx8UXhfiBppEgxob+qWXwTo17JtPbJQ2m2xnjoAQWnAmT3/wDFvek0mMx8NhhPJaOiT0m783Aa6jzxIO2k0Sk4SImm2rZ5EyXueSZkvN4nLFBbRs1hcTJQ3oZvXtEOrogb59mKgO3WmgnLr3RP6SfeiAvs0RxLrjyTiSHEme+SezZ8Wkob+0eqFCS0ix033D7LIyNX85z91BL+kiid+zMzc/mPRBGWCOCCGEEYEEAjtmjFmtVoaP8AUY0t1L2A+Miqn0+Hu1/ZJZL7Jkjdjwx1+Y9Ertmwhke0lSi2h9GFpOhMu7NQRbM956ThzPhJVvHh1uJTJeq/8nogLYbD0GunreePNNe8PlfZfHFw7pyVgWF2o5n0S/onajvUUrn6Vr9Dbl93sZBgQDQMaDofvipxYYf+2z6Qo3WEnMKOIRBE3RZDIETnwGK0RV/5IrpT9mWP0bOoz6QoLU6Az4mMn1Q1pP2Q+Jttr+jeLB1g2ZM+BmOzVOh7Oa8TEQuGoAPOqjmrKuIX8sIU96ZVtFtJPQa1gyugA9rhVdB2k4fEGuHY08wFbOxh13cgm/srZSvu7lhWHqt+rfP7NHrw60TQtowXCsmn+ICXPDmltlna9hDZTFWylU6dqr/sbD87uTfRNds5kLpCK9nCVeyVVsx1mn60ii5xv6WZ62QKFWtj2u8y4fiYKb2ZcsOCmtUnEkTkczKfcAEEiF0N4e3Fp5jMHcVrTVTtGdpy9M22zbSPgJkCrj2NnWZ4k+GCz1njNe0Pb8LhMbtQd4KMWW0B7ZH4h3pfgZbaxnVbyCSPDa5siKcvBNhv3KVIAfFhtFPGveUHjwKovtGG+7NgmdJobCc4gEscDocUmBsSFDFjNaJuIAyJ9M0Ddt9rTdBc4S+KUj/S0npdslPDskON0xFc89kxuuyooZKtL5Ft/llsqW/mY607VaPgEzqZy5IZGjl5vOdPiDIcMkWOx2au5geSd+0Qx1jxK5+Xp+py/U1+t8GicmKewEv75dh+yu2barm0d0hvxluPrNEGbLhD5Sf6ikOzoXV/uPqo4+jzw9qkh1mx0tNDrPtBj6Ch0NJ8Mipoka6C5xDQMyhsX8plGsDj3cyoC+8emxrgMARhwW2MtTxka3+ChwnzP+yK37fJpDB/mI8Gnz5IJEeXOvOJc46iZMtK0C1ECDAd/wBtgOhY3u1VkWOGP+2zsY30WmaVLaKmtdzEPdx40CVkUtM2uc05SMjzW2/TM6jfpb6JRBZ1G8gpCM1ZvxC5lHi+NZhruIyPcjlj2lCiUa6Tuq4gH79k1LHLGNvODWjgO6WaCW3aJfNrRdbwqe0eSz5eojEue/gsjFV9gtaba1lBU51oOPohkd5f8RnNVoG0XskJ3ho71xRSy7VY4yd0D/Fh2Ow5yWec85uG9fgteOo7LYKc3LsxQ60snOYrgVty0Go5oFt2ySIeBR1D/MB5jwW7DPo43sz29/YA7HtNx5huPReeicg/LnhyR+HELXTzCzFthTwxCM7PtX5rLx+NsmvG8YO4FSufuiuWaJka8A4Z4qwx6CWe03TXAqza7U5jejIb8VHZIbZNquNIgbPA3QRI6SJOGCLMcwicm8gsG21vbFIiOLg8za45O6p8v8InDt5AkkmBWEM0p7lWnvBOgxnMIewhpGYIFPeS0o/D8DO+eLvKSX9ggSJuE77zvVTJFew/iBpkItDL4hKX9Qx5I2x7XNBaWlpwIqOaERtlWZgm5vAXnzPAXlTZFDHf6bbjTiLxdP8AmmadizZeqx4uG+SyMVV2D0e1sZvO6vNDY1qLqTkNB5lS2aLBeQC1rXaE0J3FXxZWdRqinWZbmlr8D4h6a5AkguHajX5Teq3kEv5beqOSj7avI/jLwAne/YUkG1Ob80xofIoyWjId0lXtEZjBedIDmeAAxKlOCpe0xPKn3Q2Da2u+aR0NOWSr23aLWTDek7uB3y8kF2ltt75tY26zD+I8dBuVWybaiw5AG83JrqjgDOY8Nyuqbc6T0/OitOd70Txnve684uJ4UG4ZKL8p2Qed10+iO2PbcN9HdB2j8DPquw5yRK9P/KxPoNvbov8Ada4SMj+nefkf9LvRN/SPwuP+g+a2PaUkk/8Az58j90/Bk7P+fDMmNiSnhdJHaMuIRJtre9pZEgvF4fE1pIByMjpRGgqVstgE2t+LM5DgrpxPCuKeiqsit9jJ2qCRMEEEEg8VQs1oMGIH/KaPGoONN2PMIzamzrzQm0w1silc7KKly9B44iVQag6jXwVhxvMkckD2JaZ/6TvibMs4Zt7PeCubVtFxkszlw13fZVtaY1yC9oxYbpsJnwyPFUodvcBJzLxFL021GRO9W7O2QnWoHZw0Ul0b+ZSGelRIgaJucAPHs9EJtW1uoABq7Hll2qvF2baHGbntM8anuomnYsXrs5n07lgzZOpviU0v9mqJxTzT2V3vc6pJJPad2ShrkKIl+zPzeOHSXN2K+vTFdx9Vi9pnf2L/AI0L7gx17CviiFktz2UPSbocRwKmbsU5vFP4f/ZL+yZF5+kDzVmPpuoh7la/kjWXFS0y/AtTH/CRPTMKZp1Qh2x2t6V9wlnQYZrotovC5+Y5ozeAA4jy4iq6ePJaWsqSf7MtxL+l7JNqbWbD6Lek/qzoOJHgFlbVaHPdee4k1EqSGdBotAz8PQjW+8zGIu1/tTh+HYWF+JLi3/itGyoy35YlQ8PuRvUdzMkU90WvZsGCM3n+tNd+HoGj/rcmBkiyc5HfjLirth2i+FK468zNrqtwy0PBHx+HoGN1w/qd4TSs/D1nHyO+p3jNAjrFtyE+jug7R2B4Ow5yRSkvcpIXE2JZmC85kgNXPzyxrwQ8W4Nm2G26zquLiD/d0exUZc8Yu5ZGKq7BS12v5W4ZkU7AqIpkpLLb4D6Ft07z0fq9UTFlZ1RwmVUk8vMtMm2o4aAkWFMSligdqZKa3TbKzqj3xQX8R2IBoiNAAHRdLuPlyWjDFR3ZVkpUY+JNrg9vxNII4jyyPFE9pRBEuOaaFk5Uxn0mjfhyKoxiK6ZotDuWayOc9jHRIhNy+1riG0ExMGVZ+KuqdlUvRQYT1SO1vqnG91DzZ/yWXjR3zJvvE9HEDsCh/VROu/6iq/SS9R7DsjbjYkmPk1+APyulpod3JFzivOGGcyB28MtAj2x9vlsmxZlsqOxcP5syO/ipEjUtdP7peajY8OAIIINQfQ6LnOlU01OXNIBZyVe12oMAnU5AYqtadomoZz9EOc8kzOKzZOoS4ktnE3yySPanPNcNJYKAuTqpCNVjqnT2zQkkOh2h7DNp9DxRCz20OoTJ2/A8Cho7ZJjxxU4zVP6IVCo0JwTJyyHchdntZbQzI30PP1ROBGY74TPx5LdGWa7Gaoc9xzXblHaLU2G0veZDxOgCZb7cyEOkZk4NGPHcN6y9stZiOvOMyMBMSHBU9R1U4lpcv/hZhwuuX2H7QtropnlkKyG+mJ3qkJ/4Ke6WnMppcG5TXHqqt7rudCUpWkJUYTPZNXLFtF8Ok5t0M+44jh3KnfbKYHI+RSGI3Et9nRSirh7l6FSVLTRr7DtNj5Vk44B2PYc1cjQmva5rhNrgQeBC8/MUTwMkQsm3IrJVvNHynTcTVdHD1v2tfyjJfTfeQJtOzRIcdjXOcGMc68G0c+nQc0fPLEsnXQyMhW0NuujxWBrHGEBdBxLWt6LS4D4ZmWOMxmt1brXDtADpSdg5jhiPAqg/ZrMWsaDwC3zapbT2ZKly9My0axKD9EtI+ARQhQ/pBopiNI38LRc3w5cSeU26qRn4ZeCemzsDlookcNBc4gAZk/dZ+3bcLhJjrrc3VvHhp4rNmzziW2Xxjq3wTWaG+zOl+beBqWAHTEGfQ90KvtlGExEp1QKjjWqzDbQ3Nw1J9E6Hay0hweQRnPLd6LmvrqquVx4NXt0lw+TSO2YOv3JP20D5zyCj2ftpjzddR3c47p57kRMWa6GOcVz6kjNbuHplA7PbheMuxOGzmy+I8x6K4X+6+SQv3KfwY8EPXXkpP2czV3NINns1PNXvzToU0vO9P4UeEHrryVv29ksCUP2hHhwaME4hHRF403ukcN2ag21+IbhLIUi7Bzp0adB/F4eGXfbDiWkkzrjPid8s1JRK+wnVeQ5ZLaxxIjsDiTV4BP1N0G7kj8PZ8Fwm1jCMJgA9iwX6t0vhnLSZPdgnwNpRYbrzCWn11BoUfDjvpf0P115N8Nmw/wDbZyC5uz4X+2z6WoXsf8RfmdB4bDflXou0lodxRq+f8IUR4X9C9deSMWOH/ts+kJ5sjBQsZu6LUt46VS3yn6J8EfU/I0WRnUZ9LU4WZnUZ9I9F3SUdotBYKymcBqm1KW2gTpkO0IgY2TWtrSUgAAdZIdAYHD3yTHuc6ZOOZ/yusbpOu61HEe+5URl+bX2ZbWPU/kWPY/eqqGxLQBkwov025aigDW+0OiHpCTRg0YfcqsYLRgOIoU5rhOpFMj5LmkE0BMsaSXl7ure6fJ2ZlStIa6AMajd7BTXQwMPTuVi9IfCdxkVGa5cz6qIxGwg0T37uNDijVg2rKTX4YBwM/qGPagZeQZHA5k0P2Ul8Y099quxZbx1tELxq1pmwDQaiu/LxS4Y+azVi2iYcpOvN6py4EBFztaFcLy8ANxpXcJancuzh6icq8PwYMmJx+i6XCWXaPNZfa+3pzZBIlm8GRO5m7+Lkhu29vGL0WuuszbI3nfzbtyFNfUyJ0HRmDjoVpKickTocyBSiaWV3nQAVTKml1/Yw1w0E+1LDhPnVj+xpx3TCAFDayIwnpOfemtmOkJzwn54Yb1wgOJmIMb6X4ng0KVthig0s0Xd0XjnQIER3tZGc60RTZu33wui7psFJTqBud5FDhs2MT/8AmdvmHV4zKU7ItLpygESwq2XeUAbuwbRhxWzY6csQaObxB8VZn7C8/suybWx15kMtcMw5gM566LTbPt1oY3/qQGjARL7RM5BwGe8duqTaS2w1vsGIsVrG3iaaTz0QONabziTy8FLGs0Z5nMSxbIiUvPiu/bIm732LLld32XBdHpnu+Sq6U/8AKY+YIIocsUQGzHzleHP7Jf2t2bm8zRVrFfgn658hCyvDmgjA9xzCmuKrYbM5kwSJGshOh9+CuSW+Htcmakk+CsdlwziwU95pW7NZgGDsDfRXQAlkQq/hR4X9EvXXllQWCHKVxv0t9EgsrB8o5BWww+yuuy3TR8OPC/oPXXkq/o2H5ByTv0rOoOSsNGHkq1qjtZia6IaiVtoE6b0JFaxgvEDdTwQl9qdemKSwFEy0xS41PZ6Ks4DU8ljyZufl4NMY/Ids1rD8ulmCT3VVgO3jn91mhPIy7ESs20Plfz+ytx9QnxRXeHXMhMv4e+1IXk5BIJaT4LuA7ytZQcOK4+6ri/iO1KMEAMvahcd3KSe1w0XEtFZjuQBE54a0k0kK5SWW2ja3RXzqA34RPDeRqVY2rtYPJa34B/cdZoZfP+SFyer6h0/TPb/pvwYdLb7luxWx8PAzb1TUdma0Fi2sx8h8DuqZV4HNY/8AMOfdOSa18+wcB4qrD1N4+O6J5ME1+z0JpTTuWOsW2XsMjN7NCZkfynyWosFuZFbNhnqMxuI1XVw9RGTt38GDJhqO/YttUgKhcClBWgqOLildPdJAdhbYDrsOI+bz8LiZXtzv4vHjjozDB9+aiTIC870t8qb8v39kMt1sDeiyROuMt3FRqlK2wmXT0h1u2iGUFXHhIcUFfaJmZrPPXikeHGpx7/BRgH3XxXOy5XT5NkQpFMTT18l147/e5OII0l70XEOOapbLNHFx91SEnT7rpamvJcZT9+iW2GixZrU5mIm0/LQcjNFoUZrhNtR77VnnAb1JBilhBaZbsjxC04c7nh9im8SrldzQFI/s7lFY7a19MHaa8FcunVb5pUtoyuWnpkDQciPNAtvbRNYbDjR5n/aPNXdr7REMXGuN8/2jXjosuXCeNDXIdtTVYOq6nXyR/JqwYd/NX8EbWuxNBxKc+Gcej4nuUjDnMjiPNK92pB3XZ8lzds2lcu3f57EoYczI+8QFI9tKDuAUjWiXHd6I9QEIpSdE+C9zHh7TXIikhp9krqYzp/L25JooNxOqE33QuDQWL8Q/LFEjk4VBGpbl2I3DiteLwIIOawTgcQ3nUHenwyZfFLcMPFbsXW3C1XJmvpZrlcDix4Bx3Yk+C0GyNvSbdjEiQ6L7pJMsjLE70UdCC4QBJdXRh2DrXt5jqNcQMzdcCe6iHfq2Tq48neiPOhBLCgt0VN4FT22yycrlcJAAWlnXP0n0Sm1Q+tPiD5haB0ESwSPhNxlqVX7SfLJfHrwZ42qH1hyd6Lv1rOt3H0R8wm6JwhDRL2keWP3D8GeNuh69x9E19tZ1u5aQwholdBboj2k+WHuH4Mo7aUIZuJ3Mcmna0PR/0n1WnfAboK0T2w2ywT9pH5F8ejKfvDBUNef6Vbb+KSGEBjy6XRMqz30lhM9i0ZhiYp7KkEIaBTnBM9myLyt90jzyJtUmZMOKSTU0SC1udhBiy3Yea3z4QnglawKv2OP8/wBk/dX+DBstD5S/IfyPkErY0QDo2eJyPiQt9cAI5efl3p7mBHssX5/sPdWYBr4x/wDHfPeHeQCRz4+VmcP6T6zW9kAkTXRYvAvcX5PPjFtM5/kP5EBc1tqcZizntcBLfULfO99nsckyakulxeBfHvyYhtlthP8A9QHF4l3NmpP2619Vv1fZbRJMJrpsXgj8a/JZcnEqEuSPctBWdEcBzXMeOKgjiYqUjKUCWxlt76Jj/JQ3vfapne+w/ZAhAfff6p7XquBLuPvvTyUATF9Er3KM4LnoAbEOiRjzKqSK6Sja/L3x4fZAycv98FYJVQFTMdQcAmJjYhSMckcmXvfvgkBO51OFeVVKSq95OhGnCnLDukmA9ybNNLkiAOf9+SiLkr3KvEPvw9EAT3uCSarNf/hd+YEAXzjzXOOKRqbExSAhimZ94pWHPxlPuTYmXHyTnYnggY+eHZ5KV/r5qF+HaPJSOxCAGT6Q0r5BSSUPV4+SfmgRI1dkOE1zcB2ph8vIIARyjacRmMOHvxCeoomPvf6BAyVh8ApoTujwJ996rs9VJCz95BAmK8qG8ponqq2fYgCdjqJWukT2HyPkomJxxHaOyvoExD3uySB6R2XvJMPvkgDnu9PfvJVnu9+/dVK/DsVd2BSYxt6qff3dyhfn7zU8MUQB/9k=',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 5 },
      { size: 'Великий', quantity_in_stock: 5 },
    ],
    rug_type: 'Шерстяний',
    rug_material: 'Шерсть',
    rug_color: ['Синій', 'Зелений'],
    rug_shape: 'Прямокутний',
    rug_country_of_origin: 'Туреччина',
    rug_pile_height: 10,
    rug_backing_material: 'Гума',
    rug_height: 200,
    rug_sku: 'SKU123',
    rug_discounted_price: 90,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    isDiscount: true,
    currentPrice: 100,
    manufacturer: 'Виробник 1',
    unit_price: 100,
    description: 'Опис першого килима',
    isAvailable: true,
    quantity_in_stock: 10,
    popularity_rating: 4.5,
    features: ['Функція 1', 'Функція 2'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 5 },
      { size: 'Великий', quantity_in_stock: 5 },
    ],
    rug_type: 'Шерстяний',
    rug_material: 'Шерсть',
    rug_color: ['Синій', 'Зелений'],
    rug_shape: 'Прямокутний',
    rug_country_of_origin: 'Туреччина',
    rug_pile_height: 10,
    rug_backing_material: 'Гума',
    rug_height: 200,
    rug_sku: 'SKU123',
    rug_discounted_price: 90,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 1',
    unit_price: 120,
    description: 'Опис другого килима',
    isAvailable: true,
    quantity_in_stock: 8,
    popularity_rating: 4.2,
    features: ['Функція 3', 'Функція 4'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 4 },
      { size: 'Великий', quantity_in_stock: 4 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: ['Чорний', 'Сірий'],
    rug_shape: 'Прямокутний',
    rug_country_of_origin: 'Туреччина',
    rug_pile_height: 8,
    rug_backing_material: 'Тканина',
    rug_height: 180,
    rug_sku: 'SKU456',
    rug_discounted_price: 110,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 2',
    unit_price: 90,
    description: 'Опис третього килима',
    isAvailable: true,
    quantity_in_stock: 12,
    popularity_rating: 4.7,
    features: ['Функція 5', 'Функція 6'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 6 },
      { size: 'Великий', quantity_in_stock: 6 },
    ],
    rug_type: 'Шерстяний',
    rug_material: 'Шерсть',
    rug_color: ['Червоний', 'Жовтий'],
    rug_shape: 'Круглий',
    rug_country_of_origin: 'Індія',
    rug_pile_height: 12,
    rug_backing_material: 'Гума',
    rug_height: 220,
    rug_sku: 'SKU789',
    rug_discounted_price: 85,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 3',
    unit_price: 80,
    description: 'Опис четвертого килима',
    isAvailable: true,
    quantity_in_stock: 15,
    popularity_rating: 4.4,
    features: ['Функція 7', 'Функція 8'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 7 },
      { size: 'Великий', quantity_in_stock: 8 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: 'Зелений',
    rug_shape: 'Овальний',
    rug_country_of_origin: 'Китай',
    rug_pile_height: 9,
    rug_backing_material: 'Тканина',
    rug_height: 170,
    rug_sku: 'SKU101',
    rug_discounted_price: 75,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 3',
    unit_price: 80,
    description: 'Опис четвертого килима',
    isAvailable: true,
    quantity_in_stock: 15,
    popularity_rating: 4.4,
    features: ['Функція 7', 'Функція 8'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 7 },
      { size: 'Великий', quantity_in_stock: 8 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: 'Зелений',
    rug_shape: 'Овальний',
    rug_country_of_origin: 'Китай',
    rug_pile_height: 9,
    rug_backing_material: 'Тканина',
    rug_height: 170,
    rug_sku: 'SKU101',
    rug_discounted_price: 75,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 3',
    unit_price: 80,
    description: 'Опис четвертого килима',
    isAvailable: true,
    quantity_in_stock: 15,
    popularity_rating: 4.4,
    features: ['Функція 7', 'Функція 8'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 7 },
      { size: 'Великий', quantity_in_stock: 8 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: 'Зелений',
    rug_shape: 'Овальний',
    rug_country_of_origin: 'Китай',
    rug_pile_height: 9,
    rug_backing_material: 'Тканина',
    rug_height: 170,
    rug_sku: 'SKU101',
    rug_discounted_price: 75,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 3',
    unit_price: 80,
    description: 'Опис четвертого килима',
    isAvailable: true,
    quantity_in_stock: 15,
    popularity_rating: 4.4,
    features: ['Функція 7', 'Функція 8'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 7 },
      { size: 'Великий', quantity_in_stock: 8 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: 'Зелений',
    rug_shape: 'Овальний',
    rug_country_of_origin: 'Китай',
    rug_pile_height: 9,
    rug_backing_material: 'Тканина',
    rug_height: 170,
    rug_sku: 'SKU101',
    rug_discounted_price: 75,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 3',
    unit_price: 80,
    description: 'Опис четвертого килима',
    isAvailable: true,
    quantity_in_stock: 15,
    popularity_rating: 4.4,
    features: ['Функція 7', 'Функція 8'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 7 },
      { size: 'Великий', quantity_in_stock: 8 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: 'Зелений',
    rug_shape: 'Овальний',
    rug_country_of_origin: 'Китай',
    rug_pile_height: 9,
    rug_backing_material: 'Тканина',
    rug_height: 170,
    rug_sku: 'SKU101',
    rug_discounted_price: 75,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 3',
    unit_price: 80,
    description: 'Опис четвертого килима',
    isAvailable: true,
    quantity_in_stock: 15,
    popularity_rating: 4.4,
    features: ['Функція 7', 'Функція 8'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 7 },
      { size: 'Великий', quantity_in_stock: 8 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: 'Зелений',
    rug_shape: 'Овальний',
    rug_country_of_origin: 'Китай',
    rug_pile_height: 9,
    rug_backing_material: 'Тканина',
    rug_height: 170,
    rug_sku: 'SKU101',
    rug_discounted_price: 75,
  },
  {
    id: 'Килим 1',
    name: 'Килим 1',
    category: 'Килими',
    currentPrice: 100,
    manufacturer: 'Виробник 3',
    unit_price: 80,
    description: 'Опис четвертого килима',
    isAvailable: true,
    quantity_in_stock: 15,
    popularity_rating: 4.4,
    features: ['Функція 7', 'Функція 8'],
    product_image_url: 'https://orner.com.ua/storage/editor/fotos/51ec164cc8ca94e135fc2bf0d0c8d53b_1699969740.jpg',
    sizes: [
      { size: 'Маленький', quantity_in_stock: 7 },
      { size: 'Великий', quantity_in_stock: 8 },
    ],
    rug_type: 'Синтетичний',
    rug_material: 'Синтетика',
    rug_color: 'Зелений',
    rug_shape: 'Овальний',
    rug_country_of_origin: 'Китай',
    rug_pile_height: 9,
    rug_backing_material: 'Тканина',
    rug_height: 170,
    rug_sku: 'SKU101',
    rug_discounted_price: 75,
  },
];
