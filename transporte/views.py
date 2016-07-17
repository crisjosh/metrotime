from django.http import HttpResponse, HttpResponseRedirect
from django.shortcuts import render, render_to_response, redirect
from django.contrib import auth
from django.core.context_processors import csrf

# Create your views here.

def InicioView(request):
    return render(request, 'index0.html')

def RutasView(request):
    return render(request, 'index-1.html')

def UbicacionView(request):
    return render(request, 'index-2.html')

def RutaTView(request):
    return render(request, 'index-Ruta-T.html')

def RutaNorteView(request):
    return render(request, 'index-Ruta-Norte.html')

def RutaSurView(request):
    return render(request, 'index-Ruta-Sur.html')

def RutaCentroView(request):
    return render(request, 'index-Ruta-Centro.html')

def RutaEsteView(request):
    return render(request, 'index-Ruta-Este.html')

def RutaNOesteView(request):
    return render(request, 'index-Ruta-NorOeste.html')

def RutaSOesteView(request):
    return render(request, 'index-Ruta-SurOeste.html')

def UbT1View(request):
    return render(request, 'index-T1.html')

def UbT2View(request):
    return render(request, 'index-T2.html')

def UbT3View(request):
    return render(request, 'index-T3.html')

def R25JPView(request):
    return render(request, 'R-25Julio-Pradera.html')

def RalboradaView(request):
    return render(request, 'R-alborada.html')

def RcausarinaView(request):
    return render(request, 'R-causarina.html')

def RcentroView(request):
    return render(request, 'R-centro.html')

def RestelaView(request):
    return render(request, 'R-estelaMaris-Pradera.html')

def RfertisaView(request):
    return render(request, 'R-fertisa.html')

def RflorbastionView(request):
    return render(request, 'R-flor-de-bastion.html')

def RflorestaView(request):
    return render(request, 'R-floresta.html')

def RfloridarotView(request):
    return render(request, 'R-florida-rotonda.html')

def RgarzotaView(request):
    return render(request, 'R-garzota.html')

def RguasmocentralView(request):
    return render(request, 'R-GuasmoCentral.html')

def RguasmosurcristalView(request):
    return render(request, 'R-GuasmoSur-Cristal.html')

def RguayacanesView(request):
    return render(request, 'R-Guayacanes.html')

def RiguanasView(request):
    return render(request, 'R-iguanas.html')

def RjuanmontalvoView(request):
    return render(request, 'R-juan-montalvo.html')

def RjuantancaView(request):
    return render(request, 'R-juan-tancamarengo.html')

def RlaPlayitaView(request):
    return render(request, 'R-laPlayita.html')

def RmapasingueEView(request):
    return render(request, 'R-mapasingue-este.html')

def RmapasingueOView(request):
    return render(request, 'R-mapasingue-oeste.html')

def RmucholoteGView(request):
    return render(request, 'R-mucholote-G.html')

def RmucholoteOView(request):
    return render(request, 'R-mucholote-O.html')

def RorellanaView(request):
    return render(request, 'R-orellana.html')

def RpascualesView(request):
    return render(request, 'R-pascuales.html')

def RpuertoView(request):
    return render(request, 'R-puertomaritimo.html')

def RsamanesView(request):
    return render(request, 'R-samanes.html')

def RsaucesView(request):
    return render(request, 'R-sauces.html')

def RtrinipuertoView(request):
    return render(request, 'R-trinipuerto.html')

def Rtrinitaria2View(request):
    return render(request, 'R-trinitaria-2dopuente.html')

def RUBastionView(request):
    return render(request, 'R-UdeBastion.html')

def RVialaCostaView(request):
    return render(request, 'R-VialaCosta.html')

def RatahualpaSAView(request):
    return render(request, 'R-atahualpa-SanAgustin.html')

def RlosEsterosView(request):
    return render(request, 'R-losEsteros.html')

def RmartinAvilesView(request):
    return render(request, 'R-martinAviles.html')

def RplayitaSAView(request):
    return render(request, 'R-playita-SanAgustin.html')

def MiRutaView(request):
    return render(request, 'index-miRuta.html')

def AdminView(request):
    return render(request, 'index.html')