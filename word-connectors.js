window.WORD_CATEGORIES.conjunctions = new Set([
  "although","because","before","after","if","unless","while","since","until","once","when","whenever","wherever","whereas","whether","even though","even if","as soon as","as long as","so that","provided that","in case","however","therefore","moreover","furthermore","nevertheless","otherwise","instead","meanwhile","consequently","in addition","on the other hand","as a result"
]);
window.WORD_CONNECTORS = [
  ["although","-e rağmen; ... olsa da","B1","Although it was late, we continued working."],
  ["because","çünkü; ...dığı için","A1","We stayed inside because it was raining."],
  ["before","-meden önce; önce","A1","Call me before you leave."],
  ["after","-dikten sonra; sonra","A1","We went for a walk after dinner."],
  ["if","eğer; -se / -sa","A1","If you need help, just ask."],
  ["unless","-medikçe; olmadığı sürece","B1","You won't improve unless you practise."],
  ["while","-iken; oysa","A2","I listened to music while I was cooking."],
  ["since","-den beri; çünkü","B1","Since everyone is here, let's begin."],
  ["until","-e kadar; -ene dek","A2","Wait here until I come back."],
  ["once","-ınca / -ince; bir kez","B1","Once you finish, send me a message."],
  ["when","-dığı zaman; ne zaman","A1","Call me when you arrive."],
  ["whenever","ne zaman ... olursa; her ... olduğunda","B1","You can visit whenever you like."],
  ["wherever","her nerede; nereye ... olursa","B1","I'll follow you wherever you go."],
  ["whereas","oysa; buna karşılık","B2","Mia likes tea, whereas Sam prefers coffee."],
  ["whether","olup olmadığını; ister ... ister","B1","I don't know whether she is coming."],
  ["even though","... olmasına rağmen; ... olsa da","B1","Even though he was tired, he kept studying."],
  ["even if","... olsa bile; ... dahi olsa","B1","I'll go even if it rains."],
  ["as soon as","-er ... -mez; olur olmaz","B1","Call me as soon as you get home."],
  ["as long as","...dığı sürece; yeter ki","B1","You can stay as long as you are quiet."],
  ["so that","...mesi için; böylece","B1","I wrote it down so that I wouldn't forget."],
  ["provided that","şartıyla; koşuluyla","C1","You can borrow it provided that you return it tomorrow."],
  ["in case","ihtimaline karşı; olur da ... diye","B1","Take an umbrella in case it rains."],
  ["however","ancak; bununla birlikte","B1","The plan was simple; however, it took time."],
  ["therefore","bu nedenle; dolayısıyla","B2","The road was closed; therefore, we turned back."],
  ["moreover","üstelik; dahası","C1","The hotel is comfortable; moreover, it is affordable."],
  ["furthermore","ayrıca; dahası","C1","The course is useful; furthermore, it is free."],
  ["nevertheless","buna rağmen; yine de","C1","It was difficult; nevertheless, she succeeded."],
  ["otherwise","aksi hâlde; yoksa","B1","Hurry up; otherwise, we'll miss the bus."],
  ["instead","onun yerine; bunun yerine","B1","We stayed home instead of going out."],
  ["meanwhile","bu sırada; o esnada","B1","I'll cook; meanwhile, you can set the table."],
  ["consequently","sonuç olarak; bunun sonucunda","C1","He missed the deadline; consequently, the project was delayed."],
  ["in addition","ayrıca; buna ek olarak","B1","In addition, we need to check the figures."],
  ["on the other hand","öte yandan; diğer taraftan","B1","It is expensive; on the other hand, it is very durable."],
  ["as a result","sonuç olarak; bunun sonucunda","B1","It snowed heavily. As a result, school was closed."]
];
for(const [word,clue,level,example] of window.WORD_CONNECTORS){
  let item=window.WORD_BANK.find(entry=>entry[0]===word);
  if(item)item[1]=clue;else{item=[word,clue,level];window.WORD_BANK.push(item)}
  if(!item[2])item[2]=level;
  window.WORD_CATEGORIES.conjunctions.add(word);
  window.WORD_EXAMPLES[word]=example;
}
