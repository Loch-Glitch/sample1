from django.shortcuts import render

from django.http import JsonResponse

def get_message(request):
    data = {
        'message': 'Hello from Django!'
    }
    return JsonResponse(data)
