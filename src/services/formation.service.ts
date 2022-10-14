import { Formation } from "src/models/formation.model";
import { BasicService } from "./basic.service";

export class FormationService extends BasicService{


    static getFormations(): Array<Formation> {
        let list = new Array<Formation>();
        list.push(new Formation("Diplôme d'Ingénieur Généraliste", new Date("2016-09-01"), new Date("2022-09-01"), 'Ecole Nationale D\'Ingénieurs de Brest', 'Brest', 29200, 'test'));
        list.push(new Formation("Baccalauréat S, Mention Européenne", new Date("2013-09-01"), new Date("2016-09-01"), 'Lycée Gaspard Monge', 'Savigny Sur Orge', 91600, 'test'));
        return list;
    }


}