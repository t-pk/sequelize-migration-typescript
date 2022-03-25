import { QueryInterface, QueryTypes } from 'sequelize';

module.exports = {
    up: (queryInterface: QueryInterface): Promise<any> => {
    return  queryInterface.sequelize.query(`
      CREATE TABLE passengers (
        id uuid NOT NULL,
        pss_key varchar(255) NOT NULL,
        pss_journey_key varchar(255) NOT NULL,
        pss_reservation_pax_key varchar(255) NOT NULL,
        pss_reservation_key varchar(255) NOT NULL,
        reservation_number varchar(255) NOT NULL,
        reservation_locator varchar(255) NOT NULL
      );`, {type: QueryTypes.INSERT})
    },

    down: (queryInterface: QueryInterface): Promise<any> =>  {
     return queryInterface.sequelize.query(`DROP TABLE passengers`)
    }  
};