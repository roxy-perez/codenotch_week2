import { Contacts } from './contacts';
import { Person } from "./person";

let squall = new Person("Squall Leonheart", 17, "Balamb Garden");
let irvine = new Person("Irvine Kinneas", 17, "Galbadia Garden");
let laguna = new Person("Laguna Loire", 27, "Deling City");

let contacts = new Contacts();
contacts.persons = [squall, irvine, laguna];
contacts.printCalendar();