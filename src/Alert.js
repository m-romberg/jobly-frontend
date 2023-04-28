/** Alert
 *
 * displays an alert
 * props:
 *    - messages ["Invalid username/password", ...]
 *
 *  { SignupForm, LoginForm, Profile } --> Alert
 */

function Alert({ messages }) {
  console.log("alert ran");
  console.log("messages=", messages);
  return (
    <div classNames="Alert">
      {messages.map((m, idx) => (<div key={idx} className="Alert-msg">{m}</div>))}
    </div>
  );
}

export default Alert;