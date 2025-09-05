package iniciopam;
import javax.swing.JOptionPane;
/*
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/Classes/Class.java to edit this template
 */

/**
 *
 * @author May
 */
public class lineamientosClassroom {
    public lineamientosClassroom(){
        String lineamientos = 
                "1. Entregar los trabajos para su revisión.\n"+
                "2. Entregas en PDF.\n"+
                "3. Avisos de clase.\n"+
                "4. Entregas autorizadas con retraso, 5 calificación máxima";
                
         JOptionPane.showMessageDialog(null, lineamientos, "Lineamientos Classroom", JOptionPane.INFORMATION_MESSAGE);
    }
}
