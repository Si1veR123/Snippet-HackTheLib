from django.db.models import *
from user.models import User


# Create your models here.
class Snippet(Model):
    name = CharField(max_length=50)
    description = TextField()
    code = TextField()
    date = DateField(auto_now_add=True)
    author = ForeignKey(User, on_delete=CASCADE, related_name="snippets")
    language = CharField(max_length=50)
    snips = ManyToManyField(User, related_name="snips")
    snips_amount = BigIntegerField()
    # tag has foreign key to this


class Tag(Model):
    name = CharField(max_length=50)
    snippet = ForeignKey(Snippet, on_delete=CASCADE)
