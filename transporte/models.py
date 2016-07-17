from django.db import models
from django.contrib.auth.models import User
from django.core.validators import MinValueValidator, MaxValueValidator

class Administrador(models.Model):
	usuario = models.OneToOneField(User)
	nombre = models.CharField(max_length=10, blank=False)	
	apellido = models.CharField(max_length=10, blank=False)
	cedula = models.IntegerField(blank=False)
	correo = models.CharField(max_length=30, blank=False)
	
	def __unicode__(self):
	    return self.usuario.username	

class Bus(models.Model):
	placa = models.CharField(max_length=7, blank=False)
	numero_gsm = models.IntegerField(blank=False)
	codigo = models.IntegerField(blank=False)

	def __str__(self):
		return self.placa
	
class Ubicacion(models.Model):
	latitud = models.DecimalField(max_digits=15, decimal_places=10, null=False)
	longitud = models.DecimalField(max_digits=15, decimal_places=10, null=False)
	velocidad = models.DecimalField(max_digits=6, decimal_places=3, null=False)
	id_bus = models.ForeignKey(Bus)

	def __str__(self):
		return '%s %s %s' % (self.latitud, self.longitud, self.velocidad)

class Parada(models.Model):
	nombre = models.CharField(max_length=50, blank=False)	
	latitud = models.DecimalField(max_digits=15, decimal_places=10, null=False)
	longitud = models.DecimalField(max_digits=15, decimal_places=10, null=False)

	def __str__(self):
		return '%s %s' % (self.latitud, self.longitud)

class BusParada(models.Model):
	id_bus = models.ForeignKey(Bus)
	id_parada = models.ForeignKey(Parada)

class Notificacion(models.Model):
	detalle = models.CharField(max_length=100, blank=False)

class BUN(models.Model):
	id_bus = models.ForeignKey(Bus)
	id_ubicacion = models.ForeignKey(Ubicacion)	
	id_notificacion = models.ForeignKey(Notificacion)