from django.shortcuts import render


def main(r):
    return render(r, "index.html")