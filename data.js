(function(){
const names=['Иван Петров','Анна Смирнова','Олег Кузнецов','Мария Иванова','Денис Соколов','Елена Орлова','Павел Волков','Ольга Морозова','Артём Фёдоров','Наталья Попова','Кирилл Васильев','Ирина Новикова','Максим Егоров','Татьяна Белова','Сергей Павлов'];
const streets=['Ленина','Мира','Садовая','Центральная','Школьная'];
const objects=Array.from({length:15},(_,i)=>({id:i+1,title:`Квартира №${i+1}`,description:`Квартира в доме на улице ${streets[i%5]}`,address:`ул. ${streets[i%5]}, д. ${i+3}`,rooms:i%3+1,price:22000+i*1800,status:i%4===0?'Свободна':'Сдана',date:`2026-0${i%9+1}-10`,owner:{name:'Администратор'},tags:['квартира','аренда']}));
const tenants=names.map((name,i)=>({id:i+1,title:name,description:`Жилец квартиры №${i+1}`,phone:`+7 900 100-${String(1000+i)}`,email:`tenant${i+1}@mail.ru`,objectId:i+1,status:i%5===0?'Ожидает':'Активен',date:`2026-0${i%9+1}-12`,contact:{preferred:'Телефон'},tags:['жилец']}));
const payments=names.map((name,i)=>({id:i+1,title:`Платёж №${i+1}`,description:`Аренда за октябрь — ${name}`,tenantId:i+1,objectId:i+1,amount:22000+i*1800,status:i%4===0?'Просрочен':i%3===0?'Ожидается':'Оплачен',date:`2026-10-${String(i%25+1).padStart(2,'0')}`,method:{type:'Перевод'},tags:['аренда']}));
const problems=['Протекает кран','Не работает розетка','Сломался замок','Не греет батарея','Проблема с освещением'];
const repairs=names.map((name,i)=>({id:i+1,title:problems[i%5],description:`Заявка от жильца ${name}`,tenantId:i+1,objectId:i+1,priority:i%3===0?'Высокий':'Обычный',status:i%4===0?'Готово':i%3===0?'В работе':'Новая',date:`2026-10-${String(i%22+1).padStart(2,'0')}`,worker:{name:'Мастер'},tags:['ремонт']}));
const sections={objects:{title:'Объекты',data:objects,columns:[['title','Объект'],['address','Адрес'],['rooms','Комнат'],['price','Аренда'],['status','Статус']]},tenants:{title:'Жильцы',data:tenants,columns:[['title','Имя'],['phone','Телефон'],['email','Почта'],['objectId','Квартира'],['status','Статус']]},payments:{title:'Платежи',data:payments,columns:[['title','Платёж'],['description','Описание'],['amount','Сумма'],['date','Дата'],['status','Статус']]},repairs:{title:'Заявки на ремонт',data:repairs,columns:[['title','Проблема'],['description','Описание'],['priority','Приоритет'],['date','Дата'],['status','Статус']]}};

window.RentData={sections,objects,tenants,payments,repairs};
})();
