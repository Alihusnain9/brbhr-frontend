import React, { useState, useEffect } from "react";
import { getCandidateApplications } from "../../services/CandidateService";
import { Box, VStack, Text } from "@chakra-ui/react";
import NoteContext from "../../Context/NoteContext";

const JobApplicationsList = ({ applicantEmail }) => {
  const [applications, setApplications] = useState([]);
  const abc = useContext(NoteContext);

  useEffect(() => {
    abc.setName('RECRUITMENT')

    const fetchApplications = async () => {
      try {
        const data = await getCandidateApplications(applicantEmail);
        setApplications(data);
      } catch (error) {
        console.error("Error fetching applications:", error);
      }
    };

    fetchApplications();
  }, [applicantEmail]);

  return (
    <VStack spacing={4}>
      {applications.map((application) => (
        <Box
          key={application.applicantEmail}
          p={4}
          shadow="md"
          borderWidth="1px"
        >
          <Text>{`Position: ${application.position}`}</Text>
          {/* Display other application details */}
        </Box>
      ))}
    </VStack>
  );
};

export default JobApplicationsList;
