package blockly;

import cronapi.*;
import cronapi.rest.security.CronappSecurity;
import java.util.concurrent.Callable;



@CronapiMetaData(type = "blockly")
@CronappSecurity
public class Posto {

public static final int TIMEOUT = 300;

/**
 *
 * @param Entidade
 * @return Var
 */
// Posto
public static Var depoisInserir(Var Entidade) throws Exception {
 return new Callable<Var>() {

   public Var call() throws Exception {
    cronapi.database.Operations.insert(Var.valueOf("app.entity.Noticia"),Var.valueOf("texto",Var.valueOf(Var.valueOf("Foi criado um novo posto: ").toString() + cronapi.object.Operations.getObjectField(Entidade, Var.valueOf("posto")).toString())));
    return Var.VAR_NULL;
   }
 }.call();
}

}

