/* eslint-disable no-unused-vars */
type useProps = {
  data: {
    name: string;
    email: string;
  };
  updateFieldHandler: (key: string, value: string) => void;
};

const UserForm = ({ data, updateFieldHandler }: useProps) => {
  return (
    <div>
      <div className="form-control">
        <label htmlFor="name">Nome:</label>
        <input
          type="text"
          name="name"
          placeholder="Digite seu nome"
          id="name"
          required
          value={data.name || ""}
          onChange={(e) => updateFieldHandler("name", e.target.value)}
        />
      </div>
      <div className="form-control">
        <label htmlFor="email">E-mail:</label>
        <input
          type="text"
          name="email"
          placeholder="Digite seu e-mail"
          id="email"
          required
          value={data.email || ""}
          onChange={(e) => updateFieldHandler("email", e.target.value)}
        />
      </div>
    </div>
  );
};

export default UserForm;
