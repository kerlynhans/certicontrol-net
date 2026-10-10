import React from "react";
import SimboloCerti from "../images/SimboloCerti.png";

const politicas = () => {
  return (
    <div className="policitas">
      <div className="principal-policitas">
        {/** Política de calidad */}
        <div className="politica">
          <img src={SimboloCerti} alt="simbolo certi" className="img-certi" />
          <div className="p-politicas">
            <h2 className="h1-mision-vision">Política de Calidad</h2>
            <p className="p-politicas-2">
              En CERTI-CONTROL S.A.S, nuestra política de calidad se basa en la
              emisión de dictámenes con imparcialidad, independencia,
              confidencialidad, ética y buen juicio. Nos comprometemos a cumplir
              con los acuerdos establecidos con las partes interesadas, así como
              con las normas y leyes que garantizan la protección de la vida,
              los bienes y el medio ambiente. Nuestro enfoque se centra en la
              consecución de talento humano idóneo, que esté debidamente
              entrenado y formado con habilidades y conocimientos técnicos.
              Además, nos aseguramos de que nuestra relación precio-calidad
              genere rentabilidad y beneficios para nuestros clientes,
              respaldándolos y brindándoles acompañamiento en todas las
              etapas del servicio.
            </p>
          </div>
        </div>

        {/** Política de seguridad y salud en el trabajo */}
        <div className="politica">
          <img src={SimboloCerti} alt="simbolo certi" className="img-certi" />
          <div className="p-politicas">
            <h2 className="h1-mision-vision">
              Política de Seguridad y Salud en el Trabajo
            </h2>
            <p className="p-politicas-2">
              La Gerencia General de CERTI-CONTROL S.A.S en su compromiso por la
              protección integral de todos sus empleados, contratistas y el
              ambiente, afirma su compromiso hacia la implementación del Sistema
              de Gestión de la Seguridad y Salud en el Trabajo - SG-SST, y por
              la promoción de la calidad de vida laboral y la prevención de
              incidentes y accidentes de trabajo, enfermedades laborales y daños
              a la sociedad y al ambiente. De igual manera CERTI-CONTROL S.A.S
              propenderá por un ambiente laboral seguro y sano en cada uno de
              los servicios que presta mediante la identificación de los
              peligros, evaluación, valoración de los riesgos, al igual que la
              determinación de sus controles; para lo cual definirá y asignará
              todos los recursos financieros, técnicos y humanos necesarios para
              la implementación y mantenimiento del Sistema de Gestión de la
              Seguridad y Salud en el Trabajo - SG-SST.
            </p>
          </div>
        </div>

        {/** Política de tratamiento de datos personales */}
        <div className="politica">
          <img src={SimboloCerti} alt="simbolo certi" className="img-certi" />
          <div className="p-politicas">
            <h2 className="h1-mision-vision">
              Política de Tratamiento de Datos Personales
            </h2>
            <p className="p-politicas-2">
              En CERTI-CONTROL S.A.S. respetamos y protegemos su derecho a la
              privacidad. Esta página explica, en un lenguaje claro, cómo
              recolectamos, usamos y protegemos sus datos personales, y cuáles
              son sus derechos como titular de la información, de acuerdo con la
              Ley 1581 de 2012, el Decreto 1377 de 2013 y el Decreto 1074 de
              2015.
            </p>
            <p className="p-politicas-2">
              <strong>1. ¿Quién es el responsable de sus datos?</strong>
              <br />
              CERTI-CONTROL S.A.S., organismo de inspección acreditado ante ONAC
              bajo la norma ISO/IEC 17020:2012 (código de acreditación
              19-OIN-020), con domicilio en Calle 49 # 11 - 56 León XIII -
              Soacha y NIT 901167257, es la entidad responsable del tratamiento
              de los datos personales que usted nos suministra.
            </p>

            <p className="p-politicas-2">
              <strong>2. ¿Para qué usamos sus datos?</strong>
              <br />
              Sus datos personales serán utilizados únicamente para los
              siguientes fines: Adelantar los procesos de inspección, evaluación
              de la conformidad y expedición de informes y certificados de
              inspección que usted o su organización nos solicite. Establecer,
              ejecutar y mantener nuestra relación comercial o contractual con
              clientes, proveedores y aliados. Gestionar procesos de selección,
              vinculación, nómina, capacitación y desvinculación de nuestro
              personal. Cumplir con los requisitos de acreditación ante ONAC
              bajo la norma ISO/IEC 17020:2012. Atender sus peticiones, quejas,
              reclamos y solicitudes (PQRS). Realizar la facturación y gestión
              contable de los servicios prestados. Enviarle información
              comercial o de servicio relacionada con nuestras actividades.
              Atender requerimientos legales de entidades públicas como el
              Ministerio de Minas y Energía, la Superintendencia de Industria y
              Comercio, la Superintendencia de Servicios Públicos, la CREG u
              ONAC. Prevenir fraudes y proteger la integridad de nuestros
              procesos de inspección.
            </p>

            <p className="p-politicas-2">
              <strong>3. ¿Cuáles son sus derechos?</strong>
              <br />
              Como titular de sus datos personales, usted tiene derecho a:
              Conocer, actualizar y rectificar sus datos personales. Solicitar
              prueba de la autorización que nos haya otorgado. Ser informado
              sobre el uso que le hemos dado a sus datos. Presentar quejas ante
              la Superintendencia de Industria y Comercio si considera que hemos
              incumplido la ley. Revocar su autorización y/o solicitar la
              supresión de sus datos, cuando no se respeten los principios
              legales aplicables. Acceder de forma gratuita a sus datos
              personales.
            </p>
            <p className="p-politicas-2">
              <strong>4. Datos sensibles y datos de menores de edad </strong>
              <br />
              Usted no está obligado a autorizar el tratamiento de datos
              sensibles (como datos de salud, biométricos, de orientación
              política o religiosa, entre otros). Cuando en algún caso
              excepcional necesitemos recolectar este tipo de información, se lo
              informaremos de manera previa y expresa, aclarando que su entrega
              es voluntaria. Como regla general, no recolectamos datos
              personales de menores de edad. Si en un caso excepcional fuera
              necesario, exigiremos la autorización de sus padres o
              representantes legales.
            </p>
            <p className="p-politicas-2">
              <strong>5. ¿Cómo obtenemos su autorización? </strong>
              <br />
              Salvo las excepciones que contempla la ley (por ejemplo,
              información pública, requerimientos de entidades públicas en
              ejercicio de sus funciones u órdenes judiciales), el tratamiento
              de sus datos requiere su autorización previa, expresa e informada,
              la cual podemos obtener a través de formatos físicos o
              electrónicos, cláusulas contractuales, casillas de aceptación en
              medios digitales, u otros medios verificables.
            </p>
            <p className="p-politicas-2">
              <strong>6. ¿Cómo puede ejercer sus derechos? </strong>
              <br />
              Puede presentar sus solicitudes, consultas o reclamos relacionados
              con el tratamiento de sus datos personales a través de: Correo
              electrónico: administrativo@certicontrol.net Página web:{" "}
              <a href="/">https://www.certicontrol.net</a>, apartado de PQRS Una
              vez recibida su solicitud, contamos con un término de quince (15)
              días hábiles para atenderla. Si su solicitud está incompleta, se
              lo haremos saber dentro de los cinco (5) días siguientes para que
              la complemente. Si no fuera posible resolverla en el término
              inicial, le informaremos el motivo y la nueva fecha de respuesta,
              la cual no podrá superar los ocho (8) días hábiles adicionales.
            </p>
            <p className="p-politicas-2">
              <strong>7. ¿Cómo protegemos sus datos? </strong>
              <br />
              Contamos con medidas técnicas, humanas y administrativas para
              proteger sus datos personales frente a pérdida, uso indebido,
              acceso no autorizado o fraude. Todo nuestro personal con acceso a
              datos personales recibe capacitación específica y suscribe un
              acuerdo de confidencialidad como condición de su vinculación con
              la Organización.
            </p>
            <p className="p-politicas-2">
              <strong>8. Transferencia y transmisión de datos. </strong>
              <br />
              Cuando sea necesario compartir sus datos con un tercero, dentro o
              fuera de Colombia, verificaremos que dicho tercero garantice
              niveles adecuados de protección de la información, conforme a la
              normatividad vigente.
            </p>
            <p className="p-politicas-2">
              <strong>9. Vigencia y actualizaciones.</strong>
              <br /> Esta política puede ser actualizada en cualquier momento.
              Le invitamos a consultar periódicamente esta sección de nuestra
              página web para conocer la versión vigente. El documento
              controlado completo, con su respectivo control de versiones, está
              disponible para consulta y puede ser descargado desde este mismo
              apartado o solicitado a través de nuestro correo de contacto.
            </p>
            <p className="p-politicas-2">
              Descargar la Política en{" "}
              <a
                href="/OEC-DA-09 POLITICAS PARA EL TRATAMIENTO DE DATOS PERSONALES V2.pdf"
                target="_blank"
              >
                este link
              </a>
            </p>
            <p className="p-politicas-2">
              Este texto corresponde a la versión de divulgación pública de la
              Política de Tratamiento de Datos Personales de CERTI-CONTROL
              S.A.S. (documento interno OEC-DA-09). Para efectos legales y de
              auditoría prevalece el contenido del documento controlado vigente
              del Sistema de Gestión de la Organización.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default politicas;
