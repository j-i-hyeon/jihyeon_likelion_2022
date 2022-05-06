from googletrans import Translator

translator = Translator()

# sentence = "안녕하세요 코드라이언입니다. "
sentence = input("번역을 원하는 문장을 입력하세요 : ")
dest = input("어떤 언어로 번역을 원하시나요? : ")

result = translator.translate(sentence,dest)
###destination값은 지정된 것들만 사용가능
detected = translator.detect(sentence)

print("\n============= 번역 결과 ============\n")
print(detected.lang,":", sentence)
print(result.dest,":", result.text)
print("\n====================================\n")