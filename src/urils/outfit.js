




export const getOutfit=(temp)=>{
  if (temp >= 28) return '음식물 부패 주의! 에어컨 필터 점검하기 ❄️'
  if (temp >= 23) return '자외선 지수 높음! 선크림 꼼꼼히 바르기 🧴'
  if (temp >= 17) return '환기하기 딱 좋은 기온! 창문 활짝 열기 🪟'
  if (temp >= 12) return '일교차 주의! 저녁엔 난방 살짝 틀기 🌡️'
  if (temp >= 5) return '실내 건조 주의! 가습기나 젖은 수건 활용 💧'
  return '수도 계량기 동파 주의! 보일러 외출 모드 확인 🚨'
}
