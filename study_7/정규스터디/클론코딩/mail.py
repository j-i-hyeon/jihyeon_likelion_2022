from email.message import EmailMessage
import smtplib
import imghdr
import re

# SMTP 접속을 위한 서버, 계정 설정
SMTP_SERVER = "smtp.gmail.com"
# google의 SMTP server 포트 주소는 465
SMTP_PORT = 465

def sendEmail(addr):
    #유효성 검사
    reg = "^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$"
    if bool(re.match(reg,addr)):
        smtp.send_message(message)
        print("정상적으로 메일이 발송되었습니다.")
    else:
        print("유효한 이메일 주소가 아닙니다.")


message = EmailMessage()
message.set_content("코드라이언 메일링 수업 본문입니다.")

message["Subject"] = "이것은 제목입니다."
message["From"] = "###@gmail.com"
message["To"] = "###@gmail.com"


# 이미지 열기
with open("image.png","rb") as image:
    image_file = image.read()

image_type = imghdr.what('image',image_file)
message.add_attachment(image_file,maintype='image',subtype=image_type)


# gmail에서는 SSL이라는 암호화방식을 필수적으로 요구함 (보안문제)
smtp = smtplib.SMTP_SSL(SMTP_SERVER,SMTP_PORT)
smtp.login("###@gmail.com","######")


sendEmail("###@gmail.com")

smtp.quit()