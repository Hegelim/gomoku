from django.shortcuts import render
from django.http import HttpResponse


# Create your views here.
def index(request):
    context = {'fill_here': 'some_variable'}
    return render(request, 'game/index.html', context)


def board(request):
    context = {'range': range(20)}
    return render(request, 'game/board.html', context)


