import style from './Section.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={style.section}>
      <h2 className={style.title}>{title}</h2>
      {children}
    </div>
  );
};
