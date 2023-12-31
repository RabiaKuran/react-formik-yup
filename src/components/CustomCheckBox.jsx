import { useField } from "formik";
import React from "react";

export default function CustomCheckBox({ label, ...props }) {
  const [field, meta] = useField(props);
  return (

    <>
    <div className="checkbox">
      <input
        {...field}
        {...props}
        className={meta.error ? "input-error" : ""}
      />
      <span>Kullanım koşullarını kabul ediyorum.</span>
    </div>
      
      {meta.error && <div className="error">{meta.error}</div>}
    </>
  );
}
