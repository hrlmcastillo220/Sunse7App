class CrearCuenta {
  constructor(usuario, correo, contraseña) {
      this.usuario = usuario;
      this.correo = correo;
      this.contraseña = contraseña;
  }

  validarDatos() {
      // Validaciones básicas
      if (!this.usuario || !this.correo || !this.contraseña) {
          return "Todos los campos son obligatorios.";
      }
      if (this.contraseña.length < 6) {
          return "La contraseña debe tener al menos 6 caracteres.";
      }
      return "Datos válidos.";
  }

  guardarCuenta() {
      const validacion = this.validarDatos();
      if (validacion === "Datos válidos.") {
          // Aquí iría el código para guardar la cuenta en una base de datos
          return "Cuenta creada exitosamente.";
      } else {
          return validacion;
      }
  }
}