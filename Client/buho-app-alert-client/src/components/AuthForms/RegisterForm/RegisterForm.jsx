import { useState } from 'react';
import { toast } from 'react-toastify';
import Button from '../../Button/Button';
import classes from '../AuthForm.module.scss';

const RegisterForm = ({ onRegister = () => { } }) => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [rePassword, setRePassword] = useState("");
  const [description, setDescription] = useState("");

  const errors = {
    "username": !username || username.length < 4 || username.length > 32,
    "email": !email,
    "password": !password || !/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.{8,32})/.test(password),
    "re-password": !rePassword || password !== rePassword,
  }

  const hasErrors = () => Object.values(errors).some(error => error);

  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (hasErrors()) {
      toast.warn("Wrong fields!");
      return;
    }

    onRegister(username, email, password, description);

  }

  return (
    <section className={classes["container"]}>
      <h3> Únete y comparte con nosotros la experiencia universitaria </h3>

      <form onSubmit={onSubmitHandler}>
        <label>
          Ingresa un nombre de usuario para tu perfil *
          <input
            className={errors["username"] ? classes["error"] : ""}
            type={"text"}
            placeholder="ejemplo. AleGC014"
            autoComplete="username"
            name="username"
            value={username}
            onChange={({ target }) => { setUsername(target.value) }} />

          <div className={classes["hint"]}>
            Tu nombre de usuario debe estar entre 4 y 32 caracteres
          </div>
        </label>

        <label>
          Ingresa un correo al cual estará vinculado tu cuenta *
          <input
            className={errors["email"] ? classes["error"] : ""}
            type={"email"}
            placeholder="ejemplo. example@example.com"
            autoComplete="email"
            name="email"
            value={email}
            onChange={({ target }) => { setEmail(target.value) }} />
          <div className={classes["hint"]}>
            Debe ser un email con un formato valido
          </div>
        </label>

        <label>
          Ingresa un constraseña *
          <input
            className={errors["password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="Recuerda debe ser segura"
            name="password"
            value={password}
            onChange={({ target }) => { setPassword(target.value) }} />

          <div className={classes["hint"]}>
            Tu contraseña debe tener entre 8 y 32 caracteres, al menos una mayúscula, una minúscula y un número
          </div>
        </label>

        <label>
          Repite tu contraseña*
          <input
            className={errors["re-password"] ? classes["error"] : ""}
            type={"password"}
            autoComplete="new-password"
            placeholder="Recuerda debe ser segura"
            name="re-password"
            value={rePassword}
            onChange={({ target }) => { setRePassword(target.value) }} />
        </label>

        <label>
          Ingresa una pequeña descripción de ti
          <input
            className={errors["description"] ? classes["error"] : ""}
            type={"text"}
            autoComplete="Me gusta la programación"
            placeholder="Dinos algo sobre ti"
            name="description"
            value={description}
            onChange={({ target }) => { setDescription(target.value) }} />
        </label>

        <Button type="submit" disabled={hasErrors()}>
          Sign in
        </Button>
      </form>
    </section>
  )
}

export default RegisterForm;