import random
from django.core.mail import EmailMultiAlternatives
from django.template.loader import render_to_string

def send_otp(user):
    otp = f"{random.randint(100000, 999999)}"
    user.email_otp = otp
    user.save()

    subject = "Your OTP Verification Code"
    from_email = "NextStep Team <no-reply@nextstep.com>"
    to_email = [user.email]

    text_content = f"Hello {user.full_name},\n\nYour OTP code is {otp}. It is valid for 10 minutes.\n\nThank you,\nNextStep Team"

    html_content = render_to_string("otp_email.html", {"user": user, "otp": otp})

    email = EmailMultiAlternatives(subject, text_content, from_email, to_email)
    email.attach_alternative(html_content, "text/html")
    email.send(fail_silently=False)
