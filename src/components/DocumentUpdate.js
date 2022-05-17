import React, { useState } from "react";
import { Box, Flex, Modal, Button, Card, Radio } from "rimble-ui";

function DocumentUpdate(props) {
  const [isOpen, setIsOpen] = useState(false);
  const [statut, setStatut] = useState('waiting');
  const [isChanged, setIsChanged] = useState(false);

  const closeModal = (e) => {
    e.preventDefault();
    setIsOpen(false);
  };

  const openModal = (e) => {
    e.preventDefault();
    setIsOpen(true);
  };

  const onRadioChange = (e) => {
    setStatut(e.target.value);
    setIsChanged(true)
  };

  const statutUpdate = async () => {
    //fetch goes here

    alert("modifié : " + statut)
    window.location = "/Dashboard";
  }

  let document = []

  document.push(
    <div key={0}>
      {/* <input type="radio" value="Male" name="gender" /> Male */}
      <Radio
        name="statut"
        key={0}
        label={"En attente"}
        my={2}
        value={"waiting"}
        onChange={onRadioChange}
      />
    </div>
  );

  document.push(
    <div key={1}>
      {/* <input type="radio" value="Male" name="gender" /> Male */}
      <Radio
        name="statut"
        key={1}
        label={"Signé"}
        my={2}
        value={"signed"}
        onChange={onRadioChange}
      />
    </div>
  );

  document.push(
    <div key={2}>
      {/* <input type="radio" value="Male" name="gender" /> Male */}
      <Radio
        name="statut"
        key={2}
        label={"Réfusé"}
        my={2}
        value={"refused"}
        onChange={onRadioChange}
      />
    </div>
  );

  return (
    <Box className="App" p={0}>
      <Box>
        <button className="btn btn-primary" onClick={openModal}>Editer</button>

        <Modal isOpen={isOpen}>
          <Card width={"420px"} p={0}>
            <div style={{ display: "flex", justifyContent: "center" }}>
              <h5 style={{ marginTop: "6%" }}>Editer statut</h5>
              {/* Close icon to close the modal */}
              <Button.Text
                icononly
                icon={"Close"}
                color={"moon-gray"}
                position={"absolute"}
                top={0}
                right={0}
                mt={3}
                mr={3}
                onClick={closeModal}
              />
            </div>

            <Box p={4} mb={3}>
              Sélectionnez un statut {document}
            </Box>
            <Flex
              px={4}
              py={3}
              borderTop={1}
              borderColor={"#E8E8E8"}
              justifyContent={"center"}
            >
              {isChanged ? (<div>
                <Button.Outline
                  onClick={() => {
                    statutUpdate();
                  }}
                >
                  Editer
                </Button.Outline>
              </div>) : (
                <Button.Outline
                  onClick={() => {
                    alert("Aucun statut est séléctionné");
                  }}
                >
                  Editer
                </Button.Outline>
              )}
            </Flex>

          </Card>
        </Modal>
      </Box>
    </Box>
  );
}

export default DocumentUpdate;